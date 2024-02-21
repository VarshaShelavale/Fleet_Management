package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Hub;
import com.example.repository.HubRepository;

@Service
public class HubService {
	
	@Autowired
	private HubRepository hubrepository;
	
	 public List<Hub> getAllhubbycityId(int cityid){
		 return hubrepository.getHubsByCityId(cityid); }
	
	 public List<Hub> getAllhubbyairportId(int airport_id ){
		 
		 return hubrepository.getHubsByAirportId(airport_id);
		 }

	

}
