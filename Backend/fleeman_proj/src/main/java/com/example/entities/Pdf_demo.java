package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pdf_demo {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Invoice_id;
	
	private String adminname;
	
	private String Custname;
	
	private String Emailid;
	
	private double Billamount;
	 private String start_date;
	 private String end_date;
	 private String Category;
	 
	
	public String getAdminname() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	public String getCustname() {
		return Custname;
	}
	public void setCustname(String custname) {
		Custname = custname;
	}
	public String getEmail_id() {
		return Emailid;
	}
	public void setEmail_id(String email_id) {
		Emailid = email_id;
	}
	
	public int getInvoice_id() {
		return Invoice_id;
	}
	public void setInvoice_id(int invoice_id) {
		Invoice_id = invoice_id;
	}
	
	public String getEmailid() {
		return Emailid;
	}
	public void setEmailid(String emailid) {
		Emailid = emailid;
	}
	public double getBillamount() {
		return Billamount;
	}
	public void setBillamount(double billamount) {
		Billamount = billamount;
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
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
		 
    

    

}