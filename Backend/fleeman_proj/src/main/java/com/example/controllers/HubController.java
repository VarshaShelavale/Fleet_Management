package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Hub;
import com.example.services.HubService;

@RestController
@CrossOrigin("*")
public class HubController {
	
	@Autowired
	private HubService hubservice;
	
	@GetMapping("/api/hubs/{cityId}")
	public List<Hub> getAllhubbycityId(@PathVariable int cityId){
		return hubservice.getAllhubbycityId(cityId);
		
	}
	
	 @GetMapping("/api/hub/{airportId}")
	 public List<Hub> getHubByAirportId(@PathVariable int airportId) {
	    	return hubservice.getAllhubbyairportId(airportId); 
	    }

}
