package com.example.services;
import com.example.entities.Pdf_demo;
import com.example.repository.InvoiceRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {

    @Autowired
  private  InvoiceRepository invoicerepo;

    
    public void SaveDetails(Pdf_demo pdfdemo) {
    	
    	invoicerepo.save(pdfdemo);
		
    }
   public Optional<Pdf_demo> GetDetails(int Invoice_id) {
    	
	     return invoicerepo.findById(Invoice_id);
    	//return Optional.ofNullable(invoicerepo.getById(Invoice_id));
    }
}