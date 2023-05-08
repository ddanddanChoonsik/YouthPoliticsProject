package data.dto;

import java.sql.Timestamp;
import org.apache.ibatis.type.Alias;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

@Alias("member")
@Data
public class MemberDto {
	private int num;
	private String name;
	private String id;
	private String password;	
	private String email;
	private int type;
	private String tel;
	@JsonFormat(pattern= "yyyy-MM-dd", timezone = "Asia/Seoul")
	private Timestamp birthday;
	private String zoncode;
	private String address1;
	private String address2;
	@JsonFormat(pattern= "yyyy-MM-dd", timezone = "Asia/Seoul")
	private Timestamp registered_at;
	private String profile;
}
