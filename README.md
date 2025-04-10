# ��� Movie Landing Page

Uma landing page responsiva para filmes, criada com HTML, SCSS e TypeScript. Projeto estruturado com Gulp para automação de tarefas, ideal para deploy na Vercel ou outro ambiente estático.

## ��� Tecnologias Utilizadas

- HTML5
- SCSS (SASS)
- TypeScript
- Gulp
- Imagemin (para otimização de imagens)
- Vercel (para deploy)

## ��� Estrutura do Projeto

```
movie-landing/
├── dist/                  # Arquivos prontos para deploy
├── src/
│   ├── images/            # Imagens do projeto
│   ├── scss/              # Estilos com SCSS
│   │   └── style.scss
│   ├── ts/                # Scripts TypeScript
│   │   └── script.ts
│   └── index.html         # Página principal
├── gulpfile.mjs           # Configuração do Gulp (ESM)
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configurações do TypeScript
├── vercel.json            # (Opcional) Configuração para deploy na Vercel
└── README.md              # Este arquivo
```

## ���️ Como usar

### 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/movie-landing.git
cd movie-landing
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar localmente

```bash
npm run dev
```

Esse comando executa o Gulp para compilar SCSS, TypeScript, otimizar imagens e iniciar o modo de **watch**.

### 4. Build final para deploy

```bash
npm run build
```

Esse comando compila tudo para a pasta `dist/`, que é a versão pronta para subir no seu servidor ou Vercel.

## ⚠️ Observações

- Certifique-se de que está utilizando **Node.js v18 ou superior**.
- O Gulp utiliza `gulpfile.mjs` com ES Modules. Isso exige `"type": "module"` no `package.json`.
- Se usar `imagemin`, verifique se está utilizando a forma correta de importação para evitar erros.

## ��� Deploy com Vercel

- Faça login em [vercel.com](https://vercel.com)
- Clique em **"Import Project"**
- Conecte com seu repositório GitHub
- Defina `dist` como pasta de output
- Deploy automático feito! ✅

---

## ��� Licença

Projeto livre para fins educacionais e comerciais. Sinta-se à vontade para adaptar.

---

Feito com ��� por Valter Vieira – [valtervieira.dev@gmail.com](mailto:valtervieira.dev@gmail.com)

