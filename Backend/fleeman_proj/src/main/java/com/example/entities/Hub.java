package com.example.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Hub {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Hub_id;
	

	private String Hub_Name;
	private String contact;
	private String Address;

	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	
	
	
	
	@Override
	public String toString() {
		return "Hub [Hub_id=" + Hub_id + ", Hub_Name=" + Hub_Name + ", contact=" + contact + ", Address=" + Address
				+ ", city=" + city + ", airport=" + airport + "]";
	}
		public int getHub_id() {
		return Hub_id;
	}
	public void setHub_id(int hub_id) {
		Hub_id = hub_id;
	}
	public String getHub_Name() {
		return Hub_Name;
	}
	public void setHub_Name(String hub_Name) {
		Hub_Name = hub_Name;
	}
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "City_Id", referencedColumnName = "cityId")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
    private City city;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "airport_id", referencedColumnName = "airport_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
     private Airport airport;

		
		
	

}