package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.PolicyBookMarkDto;
import data.dto.YouthPolicyDto;

@Mapper
public interface YouthPolicyMapper {
	
	//공공기관 입장에서 정책을 홈페이지에서 만들시insertYouthPolicy 만들기
	
	//bookmark insert
	public void insertBookMark(PolicyBookMarkDto bdto);
	
	//bookmark select
	public List<PolicyBookMarkDto> getBookMarkCheck(int member_num);

	//bookmark one select (추후 파라미터 login값받기)
	//public int getOneBookMarkCheck(String bizId);
	public int getOneBookMarkCheck(Map<String,String> map);
	
	//bookmark delete
	public void deleteBookMark(Map<String,String> map);
	
}
