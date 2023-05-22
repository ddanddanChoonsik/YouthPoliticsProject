package util;

import java.security.MessageDigest;

public class Util {
	
	public static String encode(String str) {
		String encodedString ="";
		
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			
			md.update(str.getBytes());
			
			byte[] encodedData = md.digest();
			
			for(int i = 0; i < encodedData.length; i++) {
				encodedString += Integer.toHexString(encodedData[i] & 0xFF);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return encodedString;
	}

}
