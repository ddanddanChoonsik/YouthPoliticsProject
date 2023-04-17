package data.mapper;

import org.apache.ibatis.annotations.Mapper;

import data.dto.MemberDto;
import data.dto.YouthPolicyDto;
//import data.dto.GroupDto;

@Mapper
public interface MainMapper {
	
	
	//모든 유저수
	public int allUser();
	
	//모든 그룹수
	public int allGroup();
	
	//모든 정책수
	public int allYouthPolicy();
	
	
}
