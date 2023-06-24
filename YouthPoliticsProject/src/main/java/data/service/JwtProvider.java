package data.service;

import data.configuration.ApplicationSetting;
import data.dto.JwtUser;
import data.dto.MemberDto;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@RequiredArgsConstructor
@Component
public class JwtProvider {
    private final ApplicationSetting setting;
    private final AES256 aes256;
    private final MemberService memberService;

    private byte[] secretKey;
    private int minute;

    // 만료시간 : 1시간
    private long exp;

    private final JpaUserDetailsService userDetailsService;

    @PostConstruct
    protected void init() {
        this.secretKey = setting.getSecretKey().getBytes(StandardCharsets.UTF_8);
        this.minute = setting.getMinute();
        this.exp = 1000L * 60 * minute;
    }

    // 토큰 생성
    public String createToken(String id) throws Exception {
        MemberDto user = memberService.getOneUserData(id);

        Claims claims = Jwts.claims().setSubject(aes256.encoding(id));

        claims.put("name", aes256.encoding(user.getName()));

        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + exp))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // 권한정보 획득
    // Spring Security 인증과정에서 권한확인을 위한 기능
    public Authentication getAuthentication(String token) throws Exception {
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getAccount(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // 토큰에 담겨있는 UserKey(제목) 획득
    // aes256 인코딩하여 삽입했기 때문에 디코딩 필수
    public String getAccount(String token) throws Exception {
        return aes256.decoding(
                Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject()
        );
    }

    // 토큰에 담겨있는 데이터 획득
    public JwtUser getBody(String token) throws Exception {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(secretKey) // Set Key
                    .parseClaimsJws(token) // 파싱 및 검증, 실패 시 에러
                    .getBody();

            String name = claims.get("name", String.class);
            String hp = claims.get("hp", String.class);

            return JwtUser.builder()
                    .id(aes256.decoding(claims.getSubject()))
                    .name(aes256.decoding(name))
                    .build();
        } catch (SignatureException e){ // 기존 서명을 확인하지 못했을 경우
            throw new SignatureException("ERROR_SIGN_JWT");
        } catch (ExpiredJwtException e) { // 토큰이 만료되었을 경우
            throw new JwtException("ERROR_EXP_JWT");
        }
    }

    // Authorization Header를 통해 인증을 한다.
    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }

    // 토큰 검증
    public boolean validateToken(String token) {
        try {
            // Bearer 검증
            if (!token.substring(0, "BEARER ".length()).equalsIgnoreCase("BEARER ")) {
                return false;
            } else {
                token = token.split(" ")[1].trim();
            }
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            // 만료되었을 시 false
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}