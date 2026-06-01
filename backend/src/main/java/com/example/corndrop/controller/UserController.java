package com.example.corndrop.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.corndrop.dto.CreateAccountRequest;
import com.example.corndrop.dto.CreateAccountResponse;
import com.example.corndrop.model.User;
import com.example.corndrop.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<CreateAccountResponse> createAccount(@RequestBody CreateAccountRequest request) {
        if (request.getName() == null || request.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Name is required"));
        }

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Email is required"));
        }

        if (!request.getEmail().contains("@") || !request.getEmail().contains(".")) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Invalid email format"));
        }

        if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Password is required"));
        }

        if (request.getPassword().length() < 6) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Password must be at least 6 characters"));
        }

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Email already registered"));
        }

        String passwordHash = hashPassword(request.getPassword());
        User newUser = new User(request.getName(), request.getEmail(), passwordHash);
        User savedUser = userRepository.save(newUser);

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(new CreateAccountResponse(true, "Account created successfully", savedUser.getId()));
    }

    private String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = md.digest(password.getBytes());
            return Base64.getEncoder().encodeToString(hashedBytes);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }
}
