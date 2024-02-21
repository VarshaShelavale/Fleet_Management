package com.example.entities;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int bookingId; 

	private String start_date;
	private String end_date;
	
	private int regId;
	
	private int carcarid;
	private double estamount;

	
    public int getCarcarid() {
		return carcarid;
	}

	public void setCarcarid(int carcarid) {
		this.carcarid = carcarid;
	}

	public int getRegId() {
		return regId;
	}

	public void setRegId(int regId) {
		this.regId = regId;
	}

	private int pickuphub_id;
	private int drophub_id;
	



	public int getPickuphub_id() {
		return pickuphub_id;
	}

	public void setPickuphub_id(int pickuphub_id) {
		this.pickuphub_id = pickuphub_id;
	}

	public int getDrophub_id() {
		return drophub_id;
	}

	public void setDrophub_id(int drophub_id) {
		this.drophub_id = drophub_id;
	}

	private int car_id;
	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}


	public int getCar_id() {
		return car_id;
	}

	public void setCar_id(int car_id) {
		this.car_id = car_id;
	}

		
	
	public double getEstamount() {
		return estamount;
	}

	public void setEstamount(double estamount) {
		this.estamount = estamount;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", start_date=" + start_date + ", end_date=" + end_date + ", regId="
				+ regId + ", carcarid=" + carcarid + ", estamount=" + estamount + ", pickuphub_id=" + pickuphub_id
				+ ", drophub_id=" + drophub_id + ", car_id=" + car_id + "]";
	}

	

	
	
	
	
	
		
}