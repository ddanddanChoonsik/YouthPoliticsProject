package data.controller;

//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.mapper.MainMapper;
import data.service.MainService;


//import data.dto.CityDto;
//import data.dto.TripDto;

@RestController
@CrossOrigin
public class MainController {
	
	@Autowired
	MainMapper mainmapper;
	@Autowired
	private MainService mainService;
	
	
	@GetMapping("/")
	public String Home() {
		return "tq";
		//이건연결됨
	}
	
	@GetMapping("/allUser")
	public int allUser() {
		return mainService.allUser();
		//성공 야호야호~
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
