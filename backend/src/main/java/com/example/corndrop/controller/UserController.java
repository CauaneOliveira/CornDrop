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
import com.example.corndrop.service.EmailService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/register")
    public ResponseEntity<CreateAccountResponse> createAccount(@RequestBody CreateAccountRequest request) {
        if (request.getName() == null || request.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Nome é obrigatório"));
        }

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "E-mail é obrigatório"));
        }

        if (!request.getEmail().contains("@") || !request.getEmail().contains(".")) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Formato de e-mail inválido"));
        }

        if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Senha é obrigatória"));
        }

        if (request.getPassword().length() < 6) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Senha deve ter pelo menos 6 caracteres"));
        }

        if (!request.getPassword().matches(".*[A-Za-z].*") || !request.getPassword().matches(".*\\d.*")) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Senha deve conter pelo menos uma letra e um número"));
        }

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest()
                .body(new CreateAccountResponse(false, "Email Já Registrado"));
        }

        String passwordHash = hashPassword(request.getPassword());
        User newUser = new User(request.getName(), request.getEmail(), passwordHash);
        User savedUser = userRepository.save(newUser);

        emailService.sendWelcomeEmail(savedUser.getEmail(), savedUser.getName());

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(new CreateAccountResponse(true, "Conta criada com sucesso", savedUser.getId()));
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
