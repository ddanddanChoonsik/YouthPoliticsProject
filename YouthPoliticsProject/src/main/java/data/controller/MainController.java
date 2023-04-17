package data.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.mapper.MainMapper;
import data.service.MainService;


//import data.dto.CityDto;
//import data.dto.TripDto;
//import data.mapper.MainPageMapper;
//import data.service.MainPageService;

@RestController
@CrossOrigin
public class MainController {

	@Autowired
	private MainService mainService;
	
	
	@GetMapping("/allUser")
	public int allUser() {
		return mainService.allUser();
	}
	
	@GetMapping("/allGroup")
	public int allGroup() {
		return mainService.allGroup();
	}
	
	@GetMapping("/allYouthPolicy")
	public int allYouthPolicy() {
		return mainService.allYouthPolicy();
	}
}
