# CornDrop Frontend

Frontend React para o sistema de Agricultura de Precisão.

## Pré-requisitos

- Node.js 18+
- npm ou yarn

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env.local` na raiz do frontend:

```env
VITE_API_URL=http://localhost:8080
```

## Desenvolvimento

```bash
npm run dev
```

A aplicação será executada em `http://localhost:3000`

## Build para Produção

```bash
npm run build
```

## Estrutura do Projeto

```
frontend/
├── public/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── styles/         # Estilos globais
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Tecnologias

- React 18
- Vite
- Tailwind CSS
- React Hook Form
- Axios
- Lucide Icons
