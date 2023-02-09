package data.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginDto {
	private String id;
	private String password;
	
	/*추후 삭제 예정*/
	private int registed;
}
