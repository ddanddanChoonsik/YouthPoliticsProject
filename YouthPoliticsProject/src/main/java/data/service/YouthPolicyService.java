package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.PolicyBookMarkDto;
import data.mapper.YouthPolicyMapper;

@Service
public class YouthPolicyService implements YouthPolicyServiceInter{

	@Autowired
	private YouthPolicyMapper youthpolicyMapper;
	
	
	  @Override
	  public void insertBookMark(PolicyBookMarkDto bdto) {
	  youthpolicyMapper.insertBookMark(bdto); 
	  
	  }
	  
//	  @Override
//	  public int getBookMark(String bizId,int member_num) {
//		  Map<String, String> map = new HashMap<>();
//		  map.put("bizId", bizId);
//		  map.put("member_num", Integer.toString(member_num));
//		  return youthpolicyMapper.getBookMark(map);
//	  };
	  
	  @Override
	  public List<PolicyBookMarkDto> getBookMarkCheck(int member_num){
		  
		  return youthpolicyMapper.getBookMarkCheck(member_num);
	  }
	  
	  @Override
	  public int getOneBookMarkCheck(String bizId) {
		  return youthpolicyMapper.getOneBookMarkCheck(bizId);
	  }
	  
	  @Override
	  public void deleteBookMark(String bizId,int member_num) {
		  Map<String,String> map = new HashMap<>();
		  map.put("bizId", bizId);
		  map.put("member_num", Integer.toString(member_num));
		  youthpolicyMapper.deleteBookMark(map);
	  }; 

}
