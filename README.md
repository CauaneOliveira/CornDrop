# 🌽 Corndrop

Sistema de gestão agrícola para cadastro de milho e controle de rotinas, desenvolvido com Java (Spring Boot), PostgreSQL e Docker.

---

# 🚀 Visão Geral

Este projeto simula um ambiente real de empresa, utilizando:

* Backend em Java (Spring Boot)
* Banco de dados PostgreSQL
* Docker para conteinerização
* Docker Compose para orquestração

---

# 📦 Estrutura do Projeto

```
corndrop-system/
├── docker-compose.yml
├── .env.example
├── db/
│   └── init.sql
└── backend/
    ├── Dockerfile
    ├── pom.xml
    └── src/
```

---

# ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

* Docker
* Java 17
* Maven

---

# 🌐 Acessos

Após subir o projeto:

* API: http://localhost:8080
* Banco: localhost:5432

---

# 🧱 Próximos passos

* Criar entidades (Milho e Rotina)
* Criar endpoints REST
* Implementar regras de negócio
* Adicionar autenticação
* Documentar API com Swagger

---

# 💼 Objetivo do projeto

Este projeto foi desenvolvido para demonstrar:

* Arquitetura de sistemas
* Integração backend + banco
* Uso de Docker em ambiente real
* Boas práticas de desenvolvimento

---

## 📚 Documentação

A documentação completa do projeto está disponível na Wiki.

Configuração do Ambiente:
- [Configuração do Ambiente](./Configuração-do-Ambiente)
- [Teste no Banco de Dados](./Testes-Banco-de-Dados)

