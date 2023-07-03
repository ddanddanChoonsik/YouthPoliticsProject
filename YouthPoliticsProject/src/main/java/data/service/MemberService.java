package data.service;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import data.dto.MemberDto;
import data.dto.ProfileDto;
import data.mapper.MemberMapper;
import util.FileUtil;

@Service
public class MemberService implements MemberServiceInter {
	
	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public List<MemberDto> getUserDatas() {
		// TODO Auto-generated method stub
		return memberMapper.getUserDatas();
	}
	
	
	  @Override
	  public void insertMember(MemberDto dto) {
	  memberMapper.insertMember(dto); 
	  }
	  
	  @Override
	  public int login(String id,String password) {
		  Map<String,String> map = new HashMap<>();
		  map.put("id", id);
		  map.put("password", password);
		  System.out.println(memberMapper.login(map));
		  //return memberMapper.login(map) == 1 ? true:false ;
		  return memberMapper.login(map);		  
	  }
	  @Override
	  public List<Map<String, Object>> getLoginInfo(String id){

		  return memberMapper.getLoginInfo(id);
	  }
	  
	  //마이페이지
	  @Override
	  public MemberDto getOneUserData(int num){
		  return memberMapper.getOneUserData(num);
	  }
	  
	  @Override
	  public void profilePhotoInsert(ProfileDto pdto) {
		  memberMapper.profilePhotoInsert(pdto);
	  };
	  
	  @Override
		public void updateProfile(ProfileDto pdto) {
			// TODO Auto-generated method stub
		  memberMapper.updateProfile(pdto);
			
		}
	  @Override
		public String findPhoto(int member_num) {
			// TODO Auto-generated method stub
			return memberMapper.findPhoto(member_num);
		}
	  
	 

}
