package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages="com.example.*")
@EntityScan("com.example.entities")
@EnableJpaRepositories(basePackages="com.example.*")

public class FleemanProjApplication {

	public static void main(String[] args) {
		SpringApplication.run(FleemanProjApplication.class, args);
	}

}
