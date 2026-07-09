package com.cognizant.jwtauthservice.controller;

import com.cognizant.jwtauthservice.service.JwtService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private final JwtService jwtService;

    public AuthenticationController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(Authentication authentication) {

        String username = authentication.getName();

        String token = jwtService.generateToken(username);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        return response;
    }
}