package com.example.entities;




import jakarta.persistence.*;

@Entity
@Table
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cityId;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "State_Id")
     private State_master State_master;
    
    private String cityName;
    
   
 

	public State_master getState_master() {
		return State_master;
	}

	public void setState_master(State_master State_master) {
		this.State_master = State_master;
	}

	public int getCityId() {
		return cityId;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	@Override
	public String toString() {
		return "City [cityId=" + cityId + ", State_master=" + State_master + ", cityName=" + cityName + "]";
	}

	
    
    
}