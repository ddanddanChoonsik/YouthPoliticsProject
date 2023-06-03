package data.mapper;

import org.apache.ibatis.annotations.Mapper;

import data.dto.PolicyBookMarkDto;
import data.dto.YouthPolicyDto;

@Mapper
public interface YouthPolicyMapper {
	
	//공공기관 입장에서 정책을 홈페이지에서 만들시insertYouthPolicy 만들기
	
	//bookmark insert
	public void insertBookMark(PolicyBookMarkDto bdto);
}
