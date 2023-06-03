package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("bookmark")
public class PolicyBookMarkDto {
	
	private int num;
	private int policy_num;
	private int member_num;
	private boolean bookmark;
	private boolean policy_request;
	private String bizId;
}
