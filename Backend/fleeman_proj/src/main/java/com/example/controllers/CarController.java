package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Car;
import com.example.services.CarService;

@RestController
@CrossOrigin("*")
public class CarController {
	
	@Autowired
	private CarService carservice;
	
	@GetMapping("api/cars/{hub_id}")
	public List<Car> getCarbyHubid(@PathVariable int hub_id){
		return carservice.getCarbyHubid(hub_id);
	}
	@GetMapping("api/getcars/{hub_id}/{cartpe_id}")
	public List<Car> getCarbyHubAndCartpe(@PathVariable int hub_id,@PathVariable int cartpe_id){
		return carservice.getCarbyCartypeAndHub(hub_id, cartpe_id);
	}
	@PutMapping("/{carId}/availability")
    public void updateCarAvailability(@PathVariable int carId, @RequestParam boolean isAvailable) {
		
		carservice.UpdateAvailable(carId, isAvailable);
	}
	 @PutMapping("api/{carId}/hubId")
	    public void updateCarHubId(@PathVariable("carId") int carId, @RequestParam("hubId") int hubId) {
	         carservice.updateCarHubid(carId, hubId);
	       
	    }


}
