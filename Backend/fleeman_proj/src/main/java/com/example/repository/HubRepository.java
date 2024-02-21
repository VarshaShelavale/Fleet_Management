package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Hub;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface HubRepository extends JpaRepository<Hub,Integer> {
	
	@Query(value = "select * from hub where city_id = :cityId", nativeQuery = true) 
	public List<Hub> getHubsByCityId(@Param ("cityId") int cityId); 
	
	@Query(value = "select * from hub where airport_id = :airportId", nativeQuery = true)
	public List<Hub> getHubsByAirportId(@Param ("airportId") int airport_id); 
	
	

}
