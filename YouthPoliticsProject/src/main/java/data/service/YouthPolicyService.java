package data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.mapper.YouthPolicyMapper;

@Service
public class YouthPolicyService implements YouthPolicyServiceInter{

	@Autowired
	private YouthPolicyMapper youthpolicyMapper;
}
