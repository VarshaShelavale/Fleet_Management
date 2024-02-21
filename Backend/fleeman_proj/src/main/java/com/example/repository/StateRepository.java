package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.entities.State_master;

@Repository
public interface StateRepository extends JpaRepository<State_master, Long> {
}
