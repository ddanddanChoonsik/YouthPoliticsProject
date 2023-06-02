package data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.MemberDto;
import data.mapper.MemberMapper;

@Service
public class MemberService implements MemberServiceInter {
	
	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public List<MemberDto> getUserDatas() {
		// TODO Auto-generated method stub
		return memberMapper.getUserDatas();
	}
	
	
	  @Override
	  public void insertMember(MemberDto dto) {
	  memberMapper.insertMember(dto); 
	  }
	 

}
