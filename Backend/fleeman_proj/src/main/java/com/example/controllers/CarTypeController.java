package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Cartype;
import com.example.services.CarTypeService;

@RestController
@CrossOrigin("*")
public class CarTypeController {
	
	@Autowired
	private CarTypeService cartypeservice;
	
	@GetMapping("api/cartype")
	public List<Cartype> getallcarType()
	{
		return cartypeservice.getAllcarType();
	}
	
	@GetMapping("api/cartype/{hub_id}")
	public List<Cartype> getCarbyHubid(@PathVariable int hub_id){
		return cartypeservice.getCarTypesbyhubId(hub_id);
	}
	
	@GetMapping("api/getcartype/{cartype_id}")
	public Optional<Cartype> getCartypeByid(@PathVariable int cartype_id){
		return cartypeservice.getCartypebyId(cartype_id);
		
	}
	

}