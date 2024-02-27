package com.example.entities;


import java.util.*;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;


@Entity
public class Registration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Integer regId; 
	
	private String firstName; 
	private String lastName; 
	@Column(unique=true)
	private String mobileNumber; 
	@Column(unique=true)
	private String emailId;
	private String password;
	@Column(unique=true)
	private String dLNumber;
	@Column(unique=true)
	private String aadharNo;
	
	private String City;
	
	@Column(nullable = true)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="regId",referencedColumnName = "regId", nullable = true)
	private Set<Booking> booking;
	
	
	
	public Set<Booking> getBooking() {
		return booking;
	}
	public void setBooking(Set<Booking> booking) {
		this.booking = booking;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		City = city;
	}
	
	@Column(unique=true)
	private String passportNo; 


	
	public Integer getRegId() {
		return regId;
	}
	public void setRegId(Integer regId) {
		this.regId = regId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getdLNumber() {
		return dLNumber;
	}
	public void setdLNumber(String dLNumber) {
		this.dLNumber = dLNumber;
	}
	public String getAadharNo() {
		return aadharNo;
	}
	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}
	
	
	public String getPassportNo() {
		return passportNo;
	}
	public void setPassportNo(String passportNo) {
		this.passportNo = passportNo;
	}
		


}