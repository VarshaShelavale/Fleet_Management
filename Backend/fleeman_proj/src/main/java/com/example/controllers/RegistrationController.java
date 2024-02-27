
package com.example.controllers;

//import com.example.demo.JwtResponse;
import com.example.entities.Registration;
import com.example.services.CustomUserDetailsService;
import com.example.services.JwtUtil;
import com.example.services.RegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class RegistrationController {
	@Autowired
    private  RegistrationService registrationService;
	
	@Autowired
	private JwtUtil jwtutil;
	
	@Autowired
	private CustomUserDetailsService customuserdetailsservice;

    
   

	@GetMapping("/api/register/{emailId}/{password}") 
    public ResponseEntity<?> getUserByEmailIdAndPass(@PathVariable String emailId, @PathVariable String password) {
		try {
      Registration temp =(registrationService.getUserByEmailIdAndPass(emailId, password));
       
    	
     
	if(temp !=null)
	{
		//throw new UsernameNotFoundException("credentials don't match");
	
	
	customuserdetailsservice.setPassword(password);
	UserDetails userdetails=customuserdetailsservice.loadUserByUsername(temp.getEmailId());
	String token=this.jwtutil.generateToken(userdetails);
	System.out.println("JWT "+token);
	return ResponseEntity.ok(new JwtResponse(token,temp));
	}
	}
	catch(Exception ee)
	{
		ee.printStackTrace();
		return null;
	}
		return null;
	}

	
	
	
	
	
	@GetMapping("/api/getuser/{emailId}") 
    public Registration getUserByEmail(@PathVariable String emailId) {
        var temp = registrationService.getUserByEmail(emailId);
      System.out.println(temp); 
    	return temp;  
    } 

	
	/*@PostMapping("/api/registrations")
   public Registration createRegistration(@RequestBody Registration registration) {
        try {
            return registrationService.saveRegistration(registration);
        } catch (Exception e) {
            
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Integrity constraint violation occurred", e);
        }

		
	
	}*/
	@PostMapping("/api/registrations")
	public ResponseEntity<?> createRegistration(@RequestBody Registration registration) {
	    try {
	        registrationService.saveRegistration(registration);
	        String jwt;
			    
	        customuserdetailsservice.setPassword(registration.getPassword());
	    	UserDetails userdetails=customuserdetailsservice.loadUserByUsername(registration.getFirstName());
				jwt = jwtutil.generateToken(userdetails);
				System.out.println("JWT=>"+jwt);
			
	        return ResponseEntity.ok(new JwtResponse(jwt,registration));
	    } catch (Exception e) {
	        throw new ResponseStatusException(HttpStatus.CONFLICT, "Integrity constraint violation occurred", e);
	    }
	}

		
}

