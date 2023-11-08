package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Alias("profile")
@Data
public class ProfileDto {
	private int num;
	private int member_num;
	private String file_name;
}
