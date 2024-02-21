package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>
{
	@Modifying
    @Transactional
    @Query("UPDATE Booking b SET b.carcarid = :carcarid WHERE b.bookingId = :bookingId")
    int updateCarcaridByBookingId(int carcarid, int bookingId);

}