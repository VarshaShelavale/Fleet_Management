package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Pdf_demo;

@Repository
public interface InvoiceRepository extends JpaRepository<Pdf_demo, Integer> {
	
	

}