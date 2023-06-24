package data.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Component
public class AES256 {
    @Value("${aes.key}")
    private String key;

    public String encoding(String text) throws Exception  {
        // Cipher 객체를 인스턴스화 (원하는 변환 형태의 이름을 전달)
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");

        // 평문을 암호화 하기 위해 secretKey 생성
        SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(), "AES");
        // 초기화 벡터 생성
        IvParameterSpec ivParamSpec = new IvParameterSpec(key.substring(0, 16).getBytes());
        // 인코딩 모드로 세팅
        cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivParamSpec);

        // 암호화
        byte[] encrypted = cipher.doFinal(text.getBytes("UTF-8"));
        // 64bit 로 인코딩
        return Base64.getEncoder().encodeToString(encrypted);
    }

    public String decoding(String encText) throws Exception {
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");

        SecretKeySpec keySpec = new SecretKeySpec(key.getBytes(), "AES");
        IvParameterSpec ivParamSpec = new IvParameterSpec(key.substring(0, 16).getBytes());
        // 디코딩 모드로 세팅
        cipher.init(Cipher.DECRYPT_MODE, keySpec, ivParamSpec);

        // 복호화
        byte[] encrypted = cipher.doFinal(Base64.getDecoder().decode(encText));
        return new String(encrypted);
    }
}
