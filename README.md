<p align="center">
    <img width="260" height="80" alt="corndrop-logo-claro" src="https://github.com/user-attachments/assets/5286aef3-10e6-4cd6-adcf-661b04e7428a" />
</p>







# CornDrop — Sistema Inteligente de Alimentação para Galinhas

## Sobre o projeto

O CornDrop é um sistema automatizado de alimentação para galinhas, desenvolvido para facilitar a rotina de pequenos produtores rurais. O dispositivo permite programar a liberação de milho de forma automática por meio de uma aplicação, garantindo praticidade, controle e eficiência no manejo alimentar.

### Objetivo

Este projeto foi desenvolvido para demonstrar:

* Aplicação de análise de requisitos em um produto físico + digital
* Integração entre software e hardware (IoT)
* Automação de processos no agronegócio
* Desenvolvimento de Software
* Uso de microcontroladores em solução real

### Contexto do problema

Pequenos criadores enfrentam desafios como:

* Alimentação manual em horários fixos
* Falta de controle sobre a quantidade de ração
* Dificuldade em monitorar o nível de alimento

O CornDrop resolve esses problemas automatizando o processo e permitindo controle remoto.

### Público-alvo

* Pequenos produtores rurais
* Criadores de galinhas domésticos
* Agricultores com rotina manual

---

## Arquitetura do Sistema

### Back-end

* Java + Spring Boot
* Banco de dados PostgreSQL
* Docker para conteinerização
* Docker Compose para orquestração
* Comunicação com dispositivo (Wi-Fi/serial)

### Front-end

* React

### Hardware

* Microcontrolador ESP32
* Servomotor para liberação de milho
* Estrutura física do reservatório
* Sensor de nível de alimento (Diferencial)

### Estrutura do Projeto

```
corndrop/
├── docker-compose.yml
├── .env.example
├── db/
│   └── init.sql
└── backend/
    ├── Dockerfile
    ├── pom.xml
    └── src/
```


### Pré-requisitos

Antes de começar, você precisa ter instalado:

* [Docker](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

### Acessos

Após subir o projeto:

* API: http://localhost:8080
* Banco: localhost:5432

---

## Escopo

Encontra em desenvolvimento....

* | Escopo Wiki | [Escopo](https://github.com/CauaneOliveira/CornDrop/wiki/1.-Escopo)

* | Escopo Word | [CornDrop_Documentacao_Escopo.docx](https://github.com/CauaneOliveira/CornDrop/blob/main/doc/CornDrop_Documentacao_Escopo.docx)

* | Escopo PDF | [CornDrop_Documentacao_Escopo.pdf](https://github.com/CauaneOliveira/CornDrop/blob/main/doc/CornDrop_Documentacao_Escopo.pdf)


### Backlog (Epics)

Backlog estruturado com épicos e histórias de usuário (Notion)

* 

### Estrutura da documentação

A documentação completa do projeto está disponível no Wiki do repositório.

Configuração do Ambiente:
- [Home](https://github.com/CauaneOliveira/CornDrop/wiki)
- [Escopo](https://github.com/CauaneOliveira/CornDrop/wiki/1.-Escopo)
- [Configuração do Ambiente](https://github.com/CauaneOliveira/CornDrop/wiki/Configuração-do-Ambiente)
- [Banco de Dados](https://github.com/CauaneOliveira/CornDrop/wiki/Banco-de-Dados)
