package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.Addon;

public interface AddOnRepository extends JpaRepository<Addon,Integer> {

}