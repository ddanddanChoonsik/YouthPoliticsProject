package data.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import data.dto.MemberDto;
import data.dto.ProfileDto;
import data.service.MemberServiceInter;
import util.FileUtil;
import util.Util;

@RestController
@CrossOrigin
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberServiceInter memberService;
	
	String photoName; //업로드한 이미지명
	
	@GetMapping("/getUser")
	public List<MemberDto> getUserDatas(){
		System.out.println(memberService.getUserDatas());
		return memberService.getUserDatas();
		
	}
	
	  @PostMapping("/insert")
	  public void insert(@RequestParam MemberDto dto) { 
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
	  
	  
	  
	  
	  //마이페이지
	  
	  @GetMapping("/myprofile")
	  public Map<String, Object> getOneUserData(@RequestParam int num) {
		  
		  String photo = memberService.findPhoto(num);
		  
		  Map<String,Object> map = new HashMap<>();
			
			map.put("photo",photo);
		
			map.put("member", memberService.getOneUserData(num));
			
			return map;
	  }
	  
	  
	//리엑트에서 이미지 업로드시 save폴더에 저장후 이미지명 반환
			@PostMapping("/upload")
			public String fileUpload(
					@RequestParam MultipartFile uploadFile,
					HttpServletRequest request, 
					@RequestParam int loginNum) //requestparam이란 프론트에 정보를 spring으로 받아올땨 팔요하다.
			{
				
				//파일명
				String fileName=uploadFile.getOriginalFilename();
				
				//업로드할 폴더 위치(절대 경로임 mvc2 패턴에서) 
				String path=request.getServletContext().getRealPath("/save");
				
				//직전에 업로드한 이미지 삭제하기
				File file=new File(path+"/"+photoName);
				//만약 존재할경우 삭제
				if(file.exists())
					file.delete();
				
				//파일명 변경
				FileUtil fileUtil=new FileUtil();
				photoName=fileUtil.changeFileName(fileName);
				System.out.println("fileName="+fileName+"=>"+photoName);
				//여기까진 ok
				
				//save폴더에 업로드
				
				try {
					uploadFile.transferTo(new File(path+"/"+photoName));
				}catch (IllegalStateException | IOException e) {
					e.printStackTrace();
				}
				return photoName;
				
				
			}	

			
			
			
			@PostMapping("/update")
			public void updateProfile(@RequestBody ProfileDto pdto, @RequestParam int loginNum) 
			{
				if(photoName != null) {
					if(memberService.findPhoto(loginNum) == null) {
						
						pdto.setFile_name(photoName);
						
						pdto.setMember_num(loginNum);
						
						memberService.profilePhotoInsert(pdto);
						
						photoName=null;
					}else {
						//업로드한 사진명
						pdto.setFile_name(photoName);
						
						pdto.setMember_num(loginNum);
						
						memberService.updateProfile(pdto);
						
						photoName=null;
					}
				}
			}
}
