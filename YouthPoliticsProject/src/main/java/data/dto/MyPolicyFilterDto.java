package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("mypolyfilter")
public class MyPolicyFilterDto {
	
//	private int num;
//	private int member_num;
//	private int area_num;
//	private int policy_num;
	private String bizTycdSel_name;
	private String bizTycData_name;
}
