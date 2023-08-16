package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.PolicyBookMarkDto;
import data.dto.YouthPolicyDto;
import data.dto.MyAreaFilterDto;
import data.dto.MyPolicyFilterDto;

@Mapper
public interface YouthPolicyMapper {
	
	//정책관련 mapper
	
	// 정책 즐겨찾기
	//bookmark insert
	public void insertBookMark(PolicyBookMarkDto bdto);
	
	//bookmark select
	public List<PolicyBookMarkDto> getBookMarkCheck(int member_num);

	//bookmark one select (추후 파라미터 login값받기)
	//public int getOneBookMarkCheck(String bizId);
	public int getOneBookMarkCheck(Map<String,String> map);
	
	//bookmark delete
	public void deleteBookMark(Map<String,String> map);
	
	
	//내 정책 필터
	public List<MyPolicyFilterDto> getMyPolicyData(int member_num);
	public List<MyAreaFilterDto> getMyPolicyArea(int member_num);
}
