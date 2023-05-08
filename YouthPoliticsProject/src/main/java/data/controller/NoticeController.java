package data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	
}
