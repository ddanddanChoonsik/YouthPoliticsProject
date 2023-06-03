package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.NoticeDto;
import data.mapper.NoticeMapper;

@Service
public class NoticeService implements NoticeServiceInter{
	
	@Autowired
	private NoticeMapper noticeMapper;
	
	@Override
	public int getTotalCount() {
		
		return noticeMapper.getTotalCount();
	}
	
	@Override
	public List<NoticeDto> getAllDatas(){
		
		return noticeMapper.getAllDatas();
	}
	
	@Override
	public NoticeDto getDetailData(int num) {
		return noticeMapper.getDetailData(num);
	}
	
//	@Override
//	public void insertNotice(NoticeDto dto) {
//		
//		noticeMapper.insertNotice(dto);
//		return dto.getNum();
//	}
//	
//	@Override
//	public void insertFile(String num,String file_name) {
//		Map<String, String> map = new HashMap<>();
//	      map.put("num", num);
//	      map.put("file_name",file_name);
//	      noticeMapper.insertFile(map);
//	}

}
