
package com.example.controllers;

import com.example.entities.Registration;
import com.example.services.RegistrationService;

import java.sql.SQLIntegrityConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class RegistrationController {
	@Autowired
    private  RegistrationService registrationService;

    
   

	@GetMapping("/api/register/{emailId}/{password}") 
    public Registration getUserByEmailIdAndPass(@PathVariable String emailId, @PathVariable String password) {
        var temp = registrationService.getUserByEmailIdAndPass(emailId, password);
      System.out.println(temp); 
    	return temp;  
    } 
	
	@GetMapping("/api/getuser/{emailId}") 
    public Registration getUserByEmail(@PathVariable String emailId) {
        var temp = registrationService.getUserByEmail(emailId);
      System.out.println(temp); 
    	return temp;  
    } 

	
	@PostMapping("/api/registrations")
   public Registration createRegistration(@RequestBody Registration registration) {
        try {
            return registrationService.saveRegistration(registration);
        } catch (Exception e) {
            
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Integrity constraint violation occurred", e);
        }

		
		
	}
		
}

