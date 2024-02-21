package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.entities.Airport;

public interface AirportRepository extends JpaRepository<Airport,Integer> {
	
	@Query("SELECT a FROM Airport a WHERE a.airport_code = :code")
    Optional<Airport> findByAirportCode(@Param("code") String code);


}
