package data.mapper;

import java.util.List;
//import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.NoticeDto;

@Mapper
public interface NoticeMapper {
	
	public int getTotalCount();
	public List<NoticeDto> getAllDatas();
	public NoticeDto getDetailData(int num);
//	public void insertNotice(NoticeDto dto);
//	public void insertFile(Map<String,String> map);
	public void insertNotice(NoticeDto dto);
	//public void insertNotice(String title);
}
