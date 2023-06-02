package data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import data.dto.MemberDto;

@Mapper
public interface MemberMapper {

	public List<MemberDto> getUserDatas();
//	public void insertMember(MemberDto dto);
	

}
