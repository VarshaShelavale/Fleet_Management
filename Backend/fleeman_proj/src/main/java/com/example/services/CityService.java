package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.City;
import com.example.repository.CityRepository;

@Service
public class CityService {
	
	@Autowired
	private CityRepository repository;
	
	public List<City>getAllCities(int stateid){
		return repository.getAllCitiesByStateId(stateid);
	}

}
