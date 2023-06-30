package data.service;

import java.util.List;
import java.util.Map;

import data.dto.MemberDto;

public interface MemberServiceInter {

	public List<MemberDto> getUserDatas();
	 public void insertMember(MemberDto dto); 
	 public int login(String id,String password);
	 public List<Map<String, Object>> getLoginInfo(String id);
	 public MemberDto getOneUserData(int num);
}
