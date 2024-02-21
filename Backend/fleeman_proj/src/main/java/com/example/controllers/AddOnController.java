package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Addon;
import com.example.services.AddOnService;

@RestController
@CrossOrigin("*")
public class AddOnController {
	@Autowired
	private AddOnService addonservice;
	
	@GetMapping("api/getaddon")
	public List<Addon> getallAddOns(){
		return addonservice.getallAddOn();
	}

}