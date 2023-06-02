package data.controller;

import java.util.List;

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
	
	  @PostMapping("/insert") public void insert(@RequestBody MemberDto dto) { //
	  //비밀번호 암호화 
	  dto.setPassword(Util.encode(dto.getPassword()));
	  memberService.insertMember(dto); }
	 
	
}
