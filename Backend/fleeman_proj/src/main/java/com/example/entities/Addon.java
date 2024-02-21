package com.example.entities;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Addon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	int addon_Id;
	String Addon_name;
	Double daily_rate;
	
	public int getAddon_Id() {
		return addon_Id;
	}
	public void setAddon_Id(int addon_Id) {
		this.addon_Id = addon_Id;
	}
	public String getAddon_name() {
		return Addon_name;
	}
	public void setAddon_name(String addon_name) {
		Addon_name = addon_name;
	}
	public Double getDaily_rate() {
		return daily_rate;
	}
	public void setDaily_rate(Double daily_rate) {
		this.daily_rate = daily_rate;
	}
	
		
}
