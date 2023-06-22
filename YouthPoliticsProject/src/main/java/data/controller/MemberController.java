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
	  dto.setPassword(Util.encode(dto.getPassword()));
	  memberService.insertMember(dto); 
	  }
	  
	  @PostMapping("/login")
	  public boolean login(@RequestBody MemberDto dto) {
		  
		  String pw = dto.getPassword();
		  
//		  System.out.println("id=>"+dto.getId());
//		  System.out.println("pw=>"+dto.getPassword());
		  //return memberService.login(dto.getId(), Util.encode(pw));
		  
		  //return memberService.login(dto.getId(), dto.getPassword());
		  
	  if(memberService.login(dto.getId(), Util.encode(pw))) {
		  System.out.println("login성공");
		  List<Map<String, Object>> map = memberService.getLoginInfo(dto.getId());
		  System.out.println(memberService.getLoginInfo(dto.getId()));
		  return true;
	  }else {
		  System.out.println("login 실패");
		  return false;
	  }
	  
	  }
	  
	  @GetMapping("/myprofile")
	  public MemberDto getOneUserData(String id) {
		  return memberService.getOneUserData(id);
	  }
	  
	
}
