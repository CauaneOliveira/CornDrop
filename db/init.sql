CREATE TABLE milho (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  tipo VARCHAR(50),
  data_plantio DATE,
  status VARCHAR(30)
);

CREATE TABLE rotina (
  id SERIAL PRIMARY KEY,
  descricao TEXT,
  data DATE,
  tipo VARCHAR(50),
  milho_id INTEGER,
  FOREIGN KEY (milho_id) REFERENCES milho(id)
);

CREATE TABLE usuario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
