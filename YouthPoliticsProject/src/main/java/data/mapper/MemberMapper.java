package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.MemberDto;

@Mapper
public interface MemberMapper {

	public List<MemberDto> getUserDatas();
	public void insertMember(MemberDto dto);
	public int login(Map<String,String> map);
	public List<Map<String, Object>> getLoginInfo(String id);
	public MemberDto getOneUserData(int num);

}
