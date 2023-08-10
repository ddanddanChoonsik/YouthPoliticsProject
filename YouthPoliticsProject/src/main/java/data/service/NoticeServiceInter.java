package data.service;

import java.util.List;
import java.util.Map;

import data.dto.NoticeDto;

public interface NoticeServiceInter {

	public int getTotalCount();
	public List<NoticeDto> getAllDatas();
	public NoticeDto getDetailData(int num);
//	public void insertNotice(NoticeDto dto);
//	public void insertFile(Map<String,String> map);
	//public void insertNotice(NoticeDto dto);
	public void insertNotice(String title);
}
