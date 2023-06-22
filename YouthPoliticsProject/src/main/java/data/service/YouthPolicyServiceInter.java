package data.service;

import java.util.List;
import java.util.Map;

import data.dto.PolicyBookMarkDto;

public interface YouthPolicyServiceInter {
	
	public void insertBookMark(PolicyBookMarkDto bdto);
	//public int getBookMark(String bizId,int member_num);
	public List<PolicyBookMarkDto> getBookMarkCheck(int member_num);
	public int getOneBookMarkCheck(String bizId);
	public void deleteBookMark(String bizId);
}
