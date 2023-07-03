package data.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import data.dto.MemberDto;
import data.dto.ProfileDto;

@Mapper
public interface MemberMapper {

	public List<MemberDto> getUserDatas();
	public void insertMember(MemberDto dto);
	public int login(Map<String,String> map);
	public List<Map<String, Object>> getLoginInfo(String id);
	
	//마이페이지
	public MemberDto getOneUserData(int num);
	//프로필사진 등록(초기사진등록)
	public void profilePhotoInsert(ProfileDto pdto);
	//마이페이지  사진 업데이트
	public void updateProfile(ProfileDto pdto);
	//로딩시 사진 가져오기(프사)
	public String findPhoto(int member_num); 

}
