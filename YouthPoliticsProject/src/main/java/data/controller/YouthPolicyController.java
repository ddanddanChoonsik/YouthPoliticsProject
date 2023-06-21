package data.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.PolicyBookMarkDto;
import data.service.YouthPolicyServiceInter;

@RestController
@CrossOrigin
@RequestMapping("/policy")
public class YouthPolicyController {

	@Autowired
	private YouthPolicyServiceInter youthPolicyService;
	
	
	 @PostMapping("/bookmark")
	 public void insertBookMark(@RequestBody PolicyBookMarkDto bdto) {
	  youthPolicyService.insertBookMark(bdto);
	  System.out.println(bdto);
	  }	 
	 
//	 @GetMapping("/getbookmark")
//	 public int getBookMark(@RequestParam String bizId,@RequestParam(defaultValue = "1") int member_num) {
//	 
//		 System.out.println("북마크"+youthPolicyService.getBookMark(bizId, member_num));
//		 return youthPolicyService.getBookMark(bizId, member_num);
//	 }
	 @GetMapping("/getbookmark")
	 public List<PolicyBookMarkDto> getBookMark(@RequestParam(defaultValue = "1") int member_num) {
		 
		 return youthPolicyService.getBookMarkCheck(member_num);
	 }
	 
	 @DeleteMapping("/deletebookmark")
	 public void deleteBookMark(@RequestParam String bizId) {
		 youthPolicyService.deleteBookMark(bizId);
		 System.out.println("delete성공:"+bizId);
		 //추후 loginnum도 params로 넣어주기
	 }
}
