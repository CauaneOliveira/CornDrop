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

* | Escopo Wiki | [Escopo](https://github.com/CauaneOliveira/CornDrop/wiki/1.-Escopo)

* | Escopo | [CornDrop_Documentacao_Escopo.pdf](https://github.com/CauaneOliveira/CornDrop/blob/main/doc/CornDrop_Documentacao_Escopo.pdf)

* | Backlog | [Backlog_CornDrop.pdf](https://github.com/CauaneOliveira/CornDrop/blob/main/doc/Backlog_CornDrop.pdf)

* | Backlog | [Backlog GitHub](https://github.com/users/CauaneOliveira/projects/8)

### Estrutura da documentação

A documentação completa do projeto está disponível no Wiki do repositório.

- [Home](https://github.com/CauaneOliveira/CornDrop/wiki)
- [Escopo](https://github.com/CauaneOliveira/CornDrop/wiki/1.-Escopo)
- [Estrutura do Backlog](https://github.com/CauaneOliveira/CornDrop/wiki/2.-Estrutura-do-Backlog)
  - [Backlog do Produto](https://github.com/CauaneOliveira/CornDrop/wiki/2.1.-Backlog-do-Produto)
- [Análise de Requisitos](https://github.com/CauaneOliveira/CornDrop/wiki/3.-Análise-de-Requisitos)
- [Protótipos](https://github.com/CauaneOliveira/CornDrop/wiki/4.-Protótipos)
- [Arquitetura](https://github.com/CauaneOliveira/CornDrop/wiki/5.-Arquitetura)
  - [Banco de Dados](https://github.com/CauaneOliveira/CornDrop/wiki/5.1.-Banco-de-Dados)
- [Desenvolvimento](https://github.com/CauaneOliveira/CornDrop/wiki/6.-Desenvolvimento)
  - [Configuração do Ambiente](https://github.com/CauaneOliveira/CornDrop/wiki/6.1.-Configuração-do-Ambiente)
  - [Fluxo de Merge Request (MR)](https://github.com/CauaneOliveira/CornDrop/wiki/6.2.-Fluxo-de-Merge-Request-(MR))
