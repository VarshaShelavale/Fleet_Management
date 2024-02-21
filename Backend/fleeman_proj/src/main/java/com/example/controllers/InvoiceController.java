package com.example.controllers;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Pdf_demo;
import com.example.services.InvoiceService;

@RestController
@CrossOrigin("*")
public class InvoiceController {

	@Autowired
    private  InvoiceService PDFService;
	
	@PostMapping("api/generatepdf")
	public void Generate(@RequestBody Pdf_demo pdfdemo) {
		
		PDFService.SaveDetails(pdfdemo);
	}
	
	@GetMapping("api/generate/{Invoice_id}")
	public Optional<Pdf_demo> Generate(@PathVariable int Invoice_id) {
		
		return PDFService.GetDetails(Invoice_id);
	}


    
    
    /*@PostMapping("/generatePdf")
    public ResponseEntity<byte[]> generatePdf(@RequestBody Pdf_demo userDetails) {
        byte[] bytes = userDetailsPDFService.generateUserDetailsPDF(userDetails);

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=userDetails.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(bytes);
    }*/
}