package data.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.NoticeDto;
import data.service.NoticeServiceInter;

@RestController
@CrossOrigin
@RequestMapping("/notice")
public class NoticeController {
	
	@Autowired
	private NoticeServiceInter noticeService;
	
	@GetMapping("/totalCount")
	public int getTotalCount() {
		return noticeService.getTotalCount();
	}
	
	@GetMapping("/getAllDatas")
	public List<NoticeDto> getAllDatas(){
		System.out.println("ok");
		System.out.println(noticeService.getAllDatas());
		return noticeService.getAllDatas();
	}
	
	@GetMapping("/notice/form")
	public String noticeForm() {
		return "notice/NoticeForm";
	}
	
	/*
	 * @GetMapping("/notice/getDetailData") public List<NoticeDto> getDetailData(int
	 * num) { System.out.println("공지사항 상세보기:" + noticeService.getDetailData(num));
	 * return noticeService.getDetailData(num); }
	 */
	 @GetMapping("/getDetailData") 
	 public NoticeDto getDetailData(@RequestParam int num)
	 {		
//		System.out.println("디텔");
		 //System.out.println("공지사항 상세보기 : ", noticeService.getDetailData(num));
		 return noticeService.getDetailData(num);
	 }
	 
	 
	 //공지사항 등록 + 작성자 데이터 추가 예정
	 @PostMapping("/insertData")
	 //public void noticeInsert(@RequestParam("title") String title, @RequestParam("content") String content)
	 public void insertNotice(@RequestBody NoticeDto dto)
	 {
//		 dto.setTitle(title);
//		 dto.setContent(content);
		 System.out.println("공지사항 입력");
		 noticeService.insertNotice(dto);
	 }
	
	
	
}
