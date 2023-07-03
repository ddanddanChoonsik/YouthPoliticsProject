package data.service;

import java.util.List;
import java.util.Map;

import data.dto.MemberDto;
import data.dto.ProfileDto;

public interface MemberServiceInter {

	public List<MemberDto> getUserDatas();
	 public void insertMember(MemberDto dto); 
	 public int login(String id,String password);
	 public List<Map<String, Object>> getLoginInfo(String id);
	 public MemberDto getOneUserData(int num);
	 //프로필사진등록(초기)
	 public void profilePhotoInsert(ProfileDto pdto);
	//마이페이지  사진 업데이트
	public void updateProfile(ProfileDto pdto);
	//로딩시 사진 가져오기
	public String findPhoto(int member_num);
}
