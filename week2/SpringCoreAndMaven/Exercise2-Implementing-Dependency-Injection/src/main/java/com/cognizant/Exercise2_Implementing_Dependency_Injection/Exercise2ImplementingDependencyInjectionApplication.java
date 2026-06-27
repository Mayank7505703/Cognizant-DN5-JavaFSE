package com.cognizant.Exercise2_Implementing_Dependency_Injection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Exercise2ImplementingDependencyInjectionApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(Exercise2ImplementingDependencyInjectionApplication.class, args);
	}

	@Override
	public void run(String... args) {
		userService.displayMessage();
	}
}