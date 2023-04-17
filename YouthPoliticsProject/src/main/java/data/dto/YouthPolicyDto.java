package data.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("youthpolicy")
public class YouthPolicyDto {
	//정책dto
	private int num; //정책번호 (기본키)
	private String bizId; //정책 ID	</bizId>
	private String polyBizSecd;	//정책일련번호	</polyBizSecd>
	private String polyBizTy;		//기관 및 지자체 구분	</polyBizTy>
	private String polyBizSjnm;	//정책명	</polyBizSjnm>
	private String polyItcnCn;	//정책소개	</polyItcnCn>
	private String plcyTpNm;	//정책유형	</plcyTpNm>
	private String sporScvl;	//지원규모	</sporScvl>
	private String sporCn;	//지원내용	</sporCn>
	private String ageInfo;	//참여요건 - 연령	</ageInfo>
	private String empmSttsCn;	//참여요건 - 취업상태	</empmSttsCn>
	private String accrRqisCn;	//참여요건 - 학력	</accrRqisCn>
	private String majrRqisCn;	//참여요건 - 전공	</majrRqisCn>
	private String splzRlmRqisCn;	//참여요건 - 특화분야	</splzRlmRqisCn>
	private String cnsgNmor;//신청기관명	</cnsgNmor>
	private String rqutPrdCn;	//신청기간	</rqutPrdCn>
	private String rqutProcCn;	//신청절차	</rqutProcCn>
	private String jdgnPresCn;	//심사발표	</jdgnPresCn>
	private String rqutUrla	;	//사이트 링크 주소

}
