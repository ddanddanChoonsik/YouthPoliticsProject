package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("myareafilter")
public class MyAreaFilterDto {
	private String state_name;
	private String city_name;
	

}
