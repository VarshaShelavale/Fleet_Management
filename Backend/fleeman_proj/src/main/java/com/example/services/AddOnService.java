package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Addon;
import com.example.repository.AddOnRepository;

@Service
public class AddOnService {
   
	@Autowired
	private AddOnRepository addonrepo;
	
	public List<Addon>getallAddOn(){
		return addonrepo.findAll();
	}
}