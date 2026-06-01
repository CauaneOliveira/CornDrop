package com.example.corndrop.dto;

public class CriarContaResponse {
    private boolean sucesso;
    private String mensagem;
    private Long usuarioId;

    public CriarContaResponse(boolean sucesso, String mensagem, Long usuarioId) {
        this.sucesso = sucesso;
        this.mensagem = mensagem;
        this.usuarioId = usuarioId;
    }

    public CriarContaResponse(boolean sucesso, String mensagem) {
        this.sucesso = sucesso;
        this.mensagem = mensagem;
    }

    public boolean isSucesso() {
        return sucesso;
    }

    public void setSucesso(boolean sucesso) {
        this.sucesso = sucesso;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }
}
