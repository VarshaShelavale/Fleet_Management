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
public class Car {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
  private int Car_id;
  
  private String Car_details;
 
   private boolean is_available;
   private String Maintenance_date;
   
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "Hub_id", referencedColumnName = "Hub_id")
   private Hub hub;
   
   
   



    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "Cartype_id", referencedColumnName = "Cartype_id")
   private Cartype cartype_Master ; 
  




@Override
	public String toString() {
		return "Car [Car_id=" + Car_id + ", Car_details=" + Car_details + ", is_available=" + is_available
				+ ", Maintenance_date=" + Maintenance_date + ", hub=" + hub + ", cartype_Master=" + cartype_Master
				+ "]";
	}

public int getCar_id() {
	return Car_id;
}

public void setCar_id(int car_id) {
	Car_id = car_id;
}

public String getCar_details() {
	return Car_details;
}

public void setCar_details(String car_details) {
	Car_details = car_details;
}

public boolean getIs_available() {
	return is_available;
}

public void setIs_available(boolean is_available) {
	this.is_available = is_available;
}

public String getMaintenance_date() {
	return Maintenance_date;
}

public void setMaintenance_date(String maintenance_date) {
	Maintenance_date = maintenance_date;
}

public Hub getHub() {
	return hub;
}

public void setHub(Hub hub) {
	this.hub = hub;
}

public Cartype getCartype_Master() {
	return cartype_Master;
}

public void setCartype_Master(Cartype cartype_Master) {
	this.cartype_Master = cartype_Master;
}






   
   
  
  
  
}