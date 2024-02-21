package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Booking;
import com.example.repository.BookingRepository;

@Service
public class BookingService 
{
	@Autowired
	private BookingRepository bookingrepository;
	
	public void bookingSave(Booking booking)
	{
		bookingrepository.save(booking);
	}
	
	public void bookingDelete(int booking_id) {
		bookingrepository.deleteById(booking_id);
	}
	public void updateCarcarid(int carcarid, int bookingId) {
        bookingrepository.updateCarcaridByBookingId(carcarid, bookingId);
    }
}