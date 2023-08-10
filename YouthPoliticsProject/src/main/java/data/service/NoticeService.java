package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

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
	public NoticeDto getDetailData(@RequestParam int num) {
		System.out.println("실행");
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
	
//	@Override
//	public void insertNotice(NoticeDto dto) {
//		System.out.println(dto);
//		noticeMapper.insertNotice(dto);
//
//		//현재는 list 페이지로 이동 >> 추후 작성한 공지사항 detail 페이지로 이동
//		//return dto.getNum(); 
//	}

	@Override
	public void insertNotice(String title) {
		System.out.println(title);
		noticeMapper.insertNotice(title);

		//현재는 list 페이지로 이동 >> 추후 작성한 공지사항 detail 페이지로 이동
		//return dto.getNum(); 
	}
}
