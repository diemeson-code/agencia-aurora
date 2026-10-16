# Agência Aurora

Landing page institucional desenvolvida para a Agência Aurora, com foco em apresentar serviços digitais por meio de uma interface moderna, organizada e responsiva.

## Sobre o projeto

A Agência Aurora é um projeto de desenvolvimento web criado para praticar e demonstrar conhecimentos em desenvolvimento Front-End, componentização com React, tipagem com TypeScript e organização de estilos com CSS Modules.

## Tecnologias utilizadas

- **Next.js 16** — framework React para aplicações web.
- **React** — construção de interfaces por componentes.
- **TypeScript** — tipagem estática e maior organização do código.
- **CSS Modules** — estilização isolada por componente.
- **Git e GitHub** — versionamento e armazenamento do código-fonte.

## Funcionalidades e estrutura

- Cabeçalho com navegação entre as seções.
- Seção principal de apresentação (*Hero*).
- Apresentação dos serviços oferecidos.
- Seção institucional sobre a agência.
- Rodapé com informações do projeto.
- Organização em componentes reutilizáveis.
- Estilização com identidade visual própria.
- Metadados para identificação da página e mecanismos de busca.
- Configuração de idioma em português do Brasil.

## Organização do projeto

```text
agencia-aurora/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header/
│       ├── HeroSection/
│       ├── ServicesSection/
│       ├── AboutSection/
│       └── Footer/
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/diemeson-code/agencia-aurora.git
```

Entre na pasta:

```bash
cd agencia-aurora
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

## Verificação de produção

Para verificar a compilação do projeto:

```bash
npm run build
```

Para executar a versão compilada localmente:

```bash
npm run start
```

Execute `npm run build` antes de iniciar o servidor de produção.

## Autor

**Diemeson dos Santos**

GitHub: [@diemeson-code](https://github.com/diemeson-code)

## Licença

Projeto desenvolvido para fins de portfólio e demonstração de conhecimentos em desenvolvimento web.

