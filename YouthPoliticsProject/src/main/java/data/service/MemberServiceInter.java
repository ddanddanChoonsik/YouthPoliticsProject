package data.service;

import java.util.List;

import data.dto.MemberDto;

public interface MemberServiceInter {

	public List<MemberDto> getUserDatas();
	 public void insertMember(MemberDto dto); 
}
