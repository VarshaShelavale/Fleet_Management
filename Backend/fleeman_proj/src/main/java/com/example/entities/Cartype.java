package com.example.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Cartype {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int Cartype_id;
	String Cartype_Name;
	private double Daily_Rate;
	private double Weekly_Rate;
	private double Month_Rate;
	private String Image_Path;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "Hub_id")
      private Hub hub;
	
	public int getCartype_id() {
		return Cartype_id;
	}
	public void setCartype_id(int cartype_id) {
		Cartype_id = cartype_id;
	}
	public String getCartype_Name() {
		return Cartype_Name;
	}
	public void setCartype_Name(String cartype_Name) {
		Cartype_Name = cartype_Name;
	}
	public double getDaily_Rate() {
		return Daily_Rate;
	}
	public void setDaily_Rate(double daily_Rate) {
		Daily_Rate = daily_Rate;
	}
	public double getWeekly_Rate() {
		return Weekly_Rate;
	}
	public void setWeekly_Rate(double weekly_Rate) {
		Weekly_Rate = weekly_Rate;
	}
	public double getMonth_Rate() {
		return Month_Rate;
	}
	public void setMonth_Rate(double month_Rate) {
		Month_Rate = month_Rate;
	}
	public String getImage_Path() {
		return Image_Path;
	}
	public void setImage_Path(String image_Path) {
		Image_Path = image_Path;
	}
	@Override
	public String toString() {
		return "Cartype [Cartype_id=" + Cartype_id + ", Cartype_Name=" + Cartype_Name + ", Daily_Rate=" + Daily_Rate
				+ ", Weekly_Rate=" + Weekly_Rate + ", Month_Rate=" + Month_Rate + ", Image_Path=" + Image_Path + "]";
	}
	
	
}