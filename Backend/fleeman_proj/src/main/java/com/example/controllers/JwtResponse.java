package com.example.controllers;

import com.example.entities.Registration;

public class JwtResponse 
{
	private String token;
	private Registration registration;

	public JwtResponse(String token,Registration registration) {
	
		this.token = token;
		this.setRegistration(registration);
	}

	
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public JwtResponse() {
		super();
	
	}

	public Registration getRegistration() {
		return registration;
	}

	public void setRegistration(Registration registration) {
		this.registration = registration;
	}


	@Override
	public String toString() {
		return "JwtResponse [token=" + token + ", registration=" + registration + "]";
	}
	
	
}
