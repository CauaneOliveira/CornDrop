package com.example.corndrop.controller;

import com.example.corndrop.dto.CriarContaRequest;
import com.example.corndrop.dto.CriarContaResponse;
import com.example.corndrop.model.Usuario;
import com.example.corndrop.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/criar-conta")
    public ResponseEntity<CriarContaResponse> criarConta(@RequestBody CriarContaRequest request) {
        if (request.getNome() == null || request.getNome().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CriarContaResponse(false, "Nome é obrigatório"));
        }

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CriarContaResponse(false, "E-mail é obrigatório"));
        }

        if (!request.getEmail().contains("@")) {
            return ResponseEntity.badRequest()
                .body(new CriarContaResponse(false, "E-mail inválido"));
        }

        if (request.getSenha() == null || request.getSenha().trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new CriarContaResponse(false, "Senha é obrigatória"));
        }

        if (request.getSenha().length() < 6) {
            return ResponseEntity.badRequest()
                .body(new CriarContaResponse(false, "Senha deve ter no mínimo 6 caracteres"));
        }

        if (usuarioRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest()
                .body(new CriarContaResponse(false, "E-mail já cadastrado"));
        }

        Usuario novoUsuario = new Usuario(request.getNome(), request.getEmail(), request.getSenha());
        Usuario usuarioSalvo = usuarioRepository.save(novoUsuario);

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(new CriarContaResponse(true, "Conta criada com sucesso", usuarioSalvo.getId()));
    }
}
