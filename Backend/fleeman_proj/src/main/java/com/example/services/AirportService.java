package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Airport;
import com.example.repository.AirportRepository;

@Service
public class AirportService {
	
	@Autowired
	AirportRepository airrepository;

	public List<Airport> getAirport(){
		
		return airrepository.findAll();
	}
	
	public Optional<Airport> getAirportByCode(String code) {
        return airrepository.findByAirportCode(code);
    }

}
