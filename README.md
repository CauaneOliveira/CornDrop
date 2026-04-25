# CornDrop — Sistema Inteligente de Alimentação para Galinhas

## → Sobre o projeto

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

## → Funcionalidades principais

* Programação de horários de alimentação
* Liberação automática de milho
* Monitoramento do nível de alimento
* Controle remoto via aplicativo

---

## → Escopo

Em desenvolvimento....

---

## → Arquitetura do sistema

### Back-end

* Java + Spring Boot
* Banco de dados PostgreSQL
* Docker para conteinerização
* Docker Compose para orquestração
* Comunicação com dispositivo (Wi-Fi/serial)

### Front-end

* Em definição

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

## → Critérios de Aceitação

* O sistema deve realizar a liberação automática de milho nos horários configurados pelo usuário.
* A liberação de milho só deve ocorrer caso haja estoque disponível no dispositivo.
* O sistema deve seguir corretamente a rotina de alimentação definida pelo usuário.
* O usuário deve conseguir visualizar e acompanhar o nível de milho pelo aplicativo.
* O sistema deve notificar o usuário quando o nível de milho estiver baixo.
* O dispositivo deve continuar executando as rotinas programadas mesmo sem interação do usuário.


---

## → Estrutura da documentação

A documentação completa do projeto está disponível no Wiki do repositório.

Configuração do Ambiente:
- [Configuração do Ambiente](./Configuração-do-Ambiente)
- [Teste no Banco de Dados](./Testes-Banco-de-Dados).

---

## → Backlog (Epics & User Stories)

Backlog estruturado com épicos e histórias de usuário (Notion)
* 
