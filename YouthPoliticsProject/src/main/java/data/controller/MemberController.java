package data.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import data.dto.MemberDto;
import data.service.MemberServiceInter;
import util.Util;

@RestController
@CrossOrigin
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberServiceInter memberService;
	
	@GetMapping("/getUser")
	public List<MemberDto> getUserDatas(){
		System.out.println(memberService.getUserDatas());
		return memberService.getUserDatas();
		
	}
	
	  @PostMapping("/insert")
	  public void insert(@RequestBody MemberDto dto) { 
	  //비밀번호 암호화 
	  //dto.setPassword(Util.encode(dto.getPassword()));
      dto.setPassword(dto.getPassword());
	  memberService.insertMember(dto); 
	  }
	  
	  @PostMapping("/login")
	  public int login(@RequestBody MemberDto dto) {
		  
		  String pw = dto.getPassword();
	    //String encodepw = Util.encode(pw);
		  String id= dto.getId();
		  System.out.println("id=>"+dto.getId());
//		  System.out.println("pw=>"+encodepw);
//		  return memberService.login(dto.getId(), Util.encode(pw));
		  
		  int num = dto.getNum();
		  //return memberService.login(dto.getId(), dto.getPassword());
		  //(memberService.login(id, encodepw))== true |
//	  if(memberService.login(id, pw) == true) {
//		  System.out.println("login성공");
//		  List<Map<String, Object>> map = memberService.getLoginInfo(dto.getId());
////		  System.out.println(memberService.getLoginInfo(dto.getId()));
//		  return num;
//	  }else {
//		  System.out.println("login 실패");
//		  
//		  return 0;
//	  }
		  	return memberService.login(id, pw);
	  }
	  
	  @GetMapping("/myprofile")
	  public MemberDto getOneUserData(int num) {
		  return memberService.getOneUserData(num);
	  }
	  
	
}
