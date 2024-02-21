package com.example.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Airport {
		String airport_code;
	 String airport_name;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int airport_id;
    public String getAirport_code() {
		return airport_code;
	}
	public void setAirport_code(String airport_code) {
		this.airport_code = airport_code;
	}
	public String getAirport_name() {
		return airport_name;
	}
	public void setAirport_name(String airport_name) {
		this.airport_name = airport_name;
	}
	public int getAirport_id() {
		return airport_id;
	}
	public void setAirport_id(int airport_id) {
		this.airport_id = airport_id;
	}
	

}
