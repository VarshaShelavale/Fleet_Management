package com.example.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration,Integer> {
	
	@Query(value = "select * from registration where email_id = :emailId and password = :password", nativeQuery = true)
	public Registration getUserByEmailIdAndPass(@Param("emailId") String emailId, @Param("password") String password);
	
	@Query(value = "select * from registration where email_id = :emailId", nativeQuery = true)
	public Registration getUserByEmail(@Param("emailId") String emailId);
}