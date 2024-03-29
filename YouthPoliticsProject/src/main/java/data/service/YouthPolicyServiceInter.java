package data.service;

import java.util.List;
import java.util.Map;

import data.dto.MyAreaFilterDto;
import data.dto.MyPolicyFilterDto;
import data.dto.PolicyBookMarkDto;

public interface YouthPolicyServiceInter {
	
	public void insertBookMark(PolicyBookMarkDto bdto);
	//public int getBookMark(String bizId,int member_num);
	public List<PolicyBookMarkDto> getBookMarkCheck(int member_num);
	public int getOneBookMarkCheck(String bizId,int member_num);
	public void deleteBookMark(String bizId,int member_num);

	
	public List<MyPolicyFilterDto> getMyPolicyData(int member_num);
	public List<MyAreaFilterDto> getMyPolicyArea(int member_num);

	//관심정책선택 db데이터 불러오기 ..
	public List<MyPolicyFilterDto> getAllPolicyData();
}
