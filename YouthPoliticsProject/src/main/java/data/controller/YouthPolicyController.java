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

import data.dto.MyAreaFilterDto;
import data.dto.MyPolicyFilterDto;
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
	  System.out.println("bdto : "+bdto);
	  }	 
	 
//	 @GetMapping("/getbookmark")
//	 public int getBookMark(@RequestParam String bizId,@RequestParam(defaultValue = "1") int member_num) {
//	 
//		 System.out.println("북마크"+youthPolicyService.getBookMark(bizId, member_num));
//		 return youthPolicyService.getBookMark(bizId, member_num);
//	 }
	 @GetMapping("/getbookmark")
	 public List<PolicyBookMarkDto> getBookMark(@RequestParam int member_num) {
		 
		 System.out.println("membernum:"+member_num+"/"+(youthPolicyService.getBookMarkCheck(member_num)).size()+"개");
		 return youthPolicyService.getBookMarkCheck(member_num);
	 
	 }
	 
	 @GetMapping("/getonebookmark")
	 public int getOneBookMarkCheck(@RequestParam String bizId,@RequestParam int member_num) {
		  return youthPolicyService.getOneBookMarkCheck(bizId,member_num);
	  }
	 
	 @DeleteMapping("/deletebookmark")
	 public void deleteBookMark(@RequestParam String bizId,@RequestParam int member_num) {
		 youthPolicyService.deleteBookMark(bizId,member_num);
		 System.out.println("delete성공:"+bizId+member_num);
	 }
	 
	 @GetMapping("/mypolicyfilter")
	 public Map<String,Object> getMyPolicyFilter(@RequestParam int member_num){
		 //review controller detail처럼 map으로 묶고 하나씩 호출하기
//		 System.out.println("mypolicyfilter:"+youthPolicyService.getMyPolicyFilter(member_num));
		 
		 List<MyPolicyFilterDto> mypolydto = youthPolicyService.getMyPolicyData(member_num);
		 List<MyAreaFilterDto> myarea = youthPolicyService.getMyPolicyArea(member_num);
		 
		 Map<String,Object> mfilter = new HashMap<>();
		 mfilter.put("mypoly", mypolydto);
		 mfilter.put("myarea", myarea);
		 return mfilter;
	 }
	 
	 @GetMapping("/getallpolicydata")
	//관심정책선택 db데이터 불러오기 ..
		public List<MyPolicyFilterDto> getAllPolicyData(){
		 return youthPolicyService.getAllPolicyData();
	 }
}
