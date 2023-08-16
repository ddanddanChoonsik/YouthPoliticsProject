package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.MyAreaFilterDto;
import data.dto.MyPolicyFilterDto;
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
	  public int getOneBookMarkCheck(String bizId,int member_num) {
		  Map<String,String> map = new HashMap<>();
		  map.put("bizId", bizId);
		  map.put("member_num", Integer.toString(member_num));
		  return youthpolicyMapper.getOneBookMarkCheck(map);
	  }
	  
	  @Override
	  public void deleteBookMark(String bizId,int member_num) {
		  Map<String,String> map = new HashMap<>();
		  map.put("bizId", bizId);
		  map.put("member_num", Integer.toString(member_num));
		  youthpolicyMapper.deleteBookMark(map);
	  }
	  
	  @Override
	  public List<MyPolicyFilterDto> getMyPolicyData(int member_num){
		  
		  return youthpolicyMapper.getMyPolicyData(member_num);
		 
	  }
	  
	  @Override
	  public List<MyAreaFilterDto> getMyPolicyArea(int member_num){
		  
		  return youthpolicyMapper.getMyPolicyArea(member_num);
	  }
	  
	  @Override
	//관심정책선택 db데이터 불러오기 ..
		public List<MyPolicyFilterDto> getAllPolicyData(){
		  return youthpolicyMapper.getAllPolicyData();
	  }
}
