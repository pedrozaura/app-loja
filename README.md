# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# App Loja - Catálogo de Produtos

Aplicativo desenvolvido em React Native com Expo e Expo Router como parte da disciplina de Desenvolvimento de Dispositivos Móveis do curso de Engenharia de Software.

## 🚀 Funcionalidades

- Navegação por abas com Expo Router
- Listagem de categorias
- Produtos por categoria
- Detalhes do produto
- Página "Sobre Mim" com informações do desenvolvedor

## 🧪 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/docs)

## 📂 Estrutura de Pastas

```
app-loja/
├── app/
│   ├── index.tsx                # Tela Início
│   ├── categorias/
│   │   ├── index.tsx            # Lista de Categorias
│   │   └── [id].tsx             # Produtos por Categoria
│   ├── produto/
│   │   └── [id].tsx             # Detalhes do Produto
│   ├── sobre.tsx               # Tela Sobre Mim
│   └── _layout.tsx             # Navegação Tabs
├── data/index.ts               # Dados simulados
└── README.md
```

## 📦 Instalação

```bash
git clone https://github.com/pedrozaura/app-loja.git
cd app-loja
npm install
npx expo start
```

## 🧠 Sobre o Desenvolvedor

**Nome:** Pedro Zaura e Lucas Lima
**Curso:** Engenharia de Software  
**Semestre:** 5º

---

Projeto acadêmico orientado pelo professor Roginaldo Franco.
