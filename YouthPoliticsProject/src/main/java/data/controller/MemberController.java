package data.controller;

import java.util.List;
import java.util.Map;

import data.service.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import data.dto.MemberDto;
import data.service.MemberServiceInter;
import util.Util;

@RestController
@CrossOrigin
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

	private final JwtProvider jwtProvider;
	
	private final  MemberServiceInter memberService;
	
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
	  
	  
	  @ResponseBody
	  @PostMapping("/login")
	  public String login(@RequestBody MemberDto dto) throws Exception {
		  
		  String pw = dto.getPassword();
	    //String encodepw = Util.encode(pw);
		  String id= dto.getId();
		  System.out.println("id=>"+dto.getId());
//		  System.out.println("pw=>"+encodepw);
//		  return memberService.login(dto.getId(), Util.encode(pw));
		  
		  //return memberService.login(dto.getId(), dto.getPassword());
		  //(memberService.login(id, encodepw))== true |
	  if(memberService.login(id, pw)) {
		  System.out.println("login성공"+jwtProvider.createToken(dto.getId()));
//		  List<Map<String, Object>> map = memberService.getLoginInfo(dto.getId());
//		  System.out.println(memberService.getLoginInfo(dto.getId()));
		  return jwtProvider.createToken(dto.getId());
	  }else {
		  System.out.println("login 실패");
		  
		  return "로그인 실패";
	  }
	  
	  }
	  
	  @GetMapping("/myprofile")
	  public MemberDto getOneUserData(String id) {
		  return memberService.getOneUserData(id);
	  }
	  
	
}
