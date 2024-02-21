package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.City;
import com.example.services.CityService;

@RestController
@CrossOrigin("*")
public class CityController {
	@Autowired
	CityService cityService;
	
	@CrossOrigin
    @GetMapping("/api/cities/{stateId}")
    public List<City> getAllCities(@PathVariable int stateId) {
        
		return cityService.getAllCities(stateId);
    }
        
}
