package data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import data.dto.PolicyBookMarkDto;
import data.service.YouthPolicyServiceInter;

@RestController
@CrossOrigin
@RequestMapping("/policy")
public class YouthPolicyController {

	@Autowired
	private YouthPolicyServiceInter youthPolicyService;
	
	/*
	 * @PostMapping("/bookmark") public void insertBookMark(@RequestBody
	 * PolicyBookMarkDto bdto) {
	 * 
	 * youthPolicyService.insertBookMark(bdto); }
	 */
}
