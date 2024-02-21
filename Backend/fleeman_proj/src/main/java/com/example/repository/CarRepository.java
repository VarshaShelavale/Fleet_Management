package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.Car;

@Repository
public interface CarRepository extends JpaRepository<Car,Integer>{
	
	@Query("SELECT c FROM Car c WHERE c.hub.id = :hub_id")
	List<Car> findAllCarsByHubId(@Param("hub_id") int hub_id);

	@Query("SELECT c FROM Car c WHERE c.hub.id = :hub_id and c.cartype_Master.id= :cartye_id and c.is_available=true")
	List<Car> findAllCarsByHubAndCartype(@Param("hub_id") int hub_id,@Param("cartye_id")int cartye_id);
	
//	@Query("SELECT c.car_id FROM Car c WHERE c.hub.id = :hub_id and c.cartype_Master.id= :cartye_id")
//	List<Car> findcarIdByHubAndCartype(@Param("hub_id") int hub_id,@Param("cartye_id")int cartye_id);


	@Modifying
	@Transactional
	 @Query("UPDATE Car c SET c.is_available = :isAvailable WHERE c.Car_id = :carId")
	    void updateCarAvailability(int carId, boolean isAvailable);
	
	@Modifying
	@Transactional
	 @Query("UPDATE Car c SET c.hub.id = :hubid WHERE c.Car_id = :carId")
	    void updateCarHubId(int carId, int hubid);



}
