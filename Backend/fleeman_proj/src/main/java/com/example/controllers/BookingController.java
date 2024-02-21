package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Booking;
import com.example.services.BookingService;

@RestController
@CrossOrigin("*")
public class BookingController 
{
	@Autowired
	private BookingService bookingservice;
	
	@PostMapping("api/bookingsave")
	public void bookingSave(@RequestBody Booking booking)
	{
		bookingservice.bookingSave(booking);
	}
	
	@DeleteMapping("api/delete/{booking_id}")
	public void deleteBooking(@PathVariable int booking_id) {
		bookingservice.bookingDelete(booking_id);
	}
	@PutMapping("/{bookingId}/updateCarcarid")
    public ResponseEntity<?> updateCarcarid(@PathVariable int bookingId, @RequestParam int carcarid) {
        try {
            bookingservice.updateCarcarid(carcarid, bookingId);
            return ResponseEntity.ok().body("Carcarid updated successfully for bookingId " + bookingId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update carcarid: " + e.getMessage());
        }
    }
}