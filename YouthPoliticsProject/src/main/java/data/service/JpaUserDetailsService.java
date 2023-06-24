package data.service;

import data.configuration.CustomUserDetails;
import data.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JpaUserDetailsService implements UserDetailsService {

    private final MemberService memberService;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        MemberDto user = memberService.getOneUserData(id);
        if(user == null) new UsernameNotFoundException("Invalid authentication!");

        return new CustomUserDetails(user);
    }
}