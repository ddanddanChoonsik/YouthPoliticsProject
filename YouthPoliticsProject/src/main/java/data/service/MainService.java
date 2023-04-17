package data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.mapper.MainMapper;

@Service
public class MainService implements MainServiceInter{

	@Autowired
	private MainMapper mainMapper;
	
	
	@Override
	public int allUser() {
		return mainMapper.allUser();
	}
	
	@Override
	public int allGroup() {
		return mainMapper.allGroup();
	}
	
	@Override
	public int allYouthPolicy() {
		return mainMapper.allYouthPolicy();
	}
	
}
