package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.MemberDto;
import data.mapper.MemberMapper;

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
	  public boolean login(String id,String password) {
		  Map<String,String> map = new HashMap<>();
		  map.put("id", id);
		  map.put("password", password);
		  return memberMapper.login(map) == 1 ? true:false ;
		  
	  }
	  @Override
	  public List<Map<String, Object>> getLoginInfo(String id){

		  return memberMapper.getLoginInfo(id);
	  }
	  
	  @Override
	  public MemberDto getOneUserData(String id){
		  return memberMapper.getOneUserData(id);
	  }
	 

}
