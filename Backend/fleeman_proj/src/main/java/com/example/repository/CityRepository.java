package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.example.entities.City;

@Repository
@Transactional
public interface CityRepository extends JpaRepository<City, Integer> {
	
	
	
	@Query(value = "select * from City where state_id = :stateId", nativeQuery = true)
	public List<City> getAllCitiesByStateId(@Param("stateId") int stateId); 
	
	
	
//	@Query(value = "select * from car where hub_id = :hubId and category_id = :categoryId and availabiity = 1", nativeQuery = true)
//	List<Car> getCarsByCategory(@Param("hubId") int hubId, @Param("categoryId") int categoryId); 
	
}