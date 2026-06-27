package com.cognizant.Exercise1_Configuring_a_Basic_Spring_Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Exercise1ConfiguringABasicSpringApplication implements CommandLineRunner {

	@Autowired
	private GreetingService greetingService;

	public static void main(String[] args) {
		SpringApplication.run(Exercise1ConfiguringABasicSpringApplication.class, args);
	}

	@Override
	public void run(String... args) {
		greetingService.greeting();
	}
}