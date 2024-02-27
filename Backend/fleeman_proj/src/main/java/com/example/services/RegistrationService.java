package com.example.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Registration;
import com.example.repository.RegistrationRepository;

@Service
public class RegistrationService  {
	@Autowired
	private  RegistrationRepository registrationRepository;

    
	public Registration getUserByEmailIdAndPass(String emailId, String password) {
		return registrationRepository.getUserByEmailIdAndPass(emailId, password); 
	}
	
	public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }
	
	public Registration getUserByEmail(String emailId) {
		return registrationRepository.getUserByEmail(emailId); 
	}

	

}