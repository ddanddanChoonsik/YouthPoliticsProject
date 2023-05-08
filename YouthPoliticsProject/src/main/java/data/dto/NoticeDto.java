package data.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("notice")
@Data
public class NoticeDto {
	private int num;
	private int member_num;
	private String name;
	private String title;
	private String content;
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
	private Timestamp created_at;
	private int notice_num;
//	private String file_name;
	
}
