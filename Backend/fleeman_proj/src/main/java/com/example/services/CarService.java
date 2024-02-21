package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Car;
import com.example.repository.CarRepository;

@Service
public class CarService {
	
	@Autowired
	private CarRepository carrepository;
	
	public List<Car> getCarbyHubid(int hub_id){
		return carrepository.findAllCarsByHubId(hub_id);	}
	
	public List <Car> getCarbyCartypeAndHub(int hub_id,int cartype_id){
		return carrepository.findAllCarsByHubAndCartype(hub_id, cartype_id);
		
	}
	
   public void UpdateAvailable(int carId, boolean isAvailable) {
		
		carrepository.updateCarAvailability(carId,isAvailable);
	}
   public void updateCarHubid(int carid, int hubid) {
	   carrepository.updateCarHubId(carid, hubid);
   }


}
