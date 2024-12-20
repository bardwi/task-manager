# React + TypeScript + Vite + SWC
##### Welcome to a seamless integration of React, TypeScript, and Vite. This template provides a lightning-fast development experience with Hot Module Replacement (HMR), a minimal ESLint configuration tailored for best practices, and an option to choose between Babel and SWC for Fast Refresh.


## 🚀 About the Project

- The Task Management App is a powerful and user-friendly application designed to help you manage your tasks efficiently. 
  Built with cutting-edge technologies like React, TypeScript, Vite, and SWC, this app offers optimal performance and an excellent user experience. 
  With features such as CRUD operations, categorization and tagging, due dates and reminders, and drag-and-drop functionality for task prioritization, 
  this app serves as a comprehensive tool for personal and professional task management.
## 🌟Features

- 🚀 Fast Development: Experience near-instant updates with Vite's HMR.
- 🌊 Optimized Refresh: Choose between Babel and SWC for Fast Refresh using official Vite plugins.
- 🛠 Strong Typing: Fully configured TypeScript for robust, type-safe code.
- 🔍 Linting: ESLint setup for catching common issues, with recommendations for stricter type-aware linting.
- 🧰 Flexibility: Extend and modify the configuration as per your project's requirements.
- 📅 Due Dates and Reminders: Manage due dates and receive reminders for important tasks.
- 🖱 Drag-and-Drop: Easily prioritize tasks using drag-and-drop functionality.
- ✅ CRUD Operations: Create, Read, Update, and Delete tasks seamlessly.
- 🏷 Categorization and Tagging: Organize tasks by categories and tags for better management.

## 🛠 Technologies

- Frontend: React, TypeScript, Vite, SWC
- Styling: CSS (Material-UI, etc.)
- State Management: React Hooks
- Drag-and-Drop: react-beautiful-dnd
- Unique ID Generation: uuid
- Testing: Jest, React Testing Library

## 📚 Getting Started

## 📥 Installation
To start with the project, you'd typically clone the repository and then install dependencies:
```sh
git clone https://github.com/bardwi/task-manager.git

cd task-manager 

npm install
```


## 🏃‍♂️ Development Server
To run the development server:
```sh
npm run dev
```
## 🏗 Building for Production
To create a production-ready build:
```sh
npm run build
```
## 🧪Testing
This template includes a Jest setup out of the box, configured to work smoothly with TypeScript and React. It also uses Testing Library to encourage writing tests that focus on your application's behavior rather than the implementation details.

## 🔄 Running Tests
To run all tests, execute the following command:
```sh
npm run test
```
For a watch mode, where tests run on file changes:
```sh
npm run test:watch
```
## Test Coverage
We also have test coverage enabled to provide an overview of your code's testability. The coverage reports are generated in the coverage/ directory, which you can navigate and view in a browser for a more detailed look.

To generate test coverage, simply run the tests:
```sh
npm run test:watch
```
## ✍️ Writing Tests
Place your test files inside the src/*/test/ directory. These should have .test.tsx extensions to be recognized. Refer to the Jest documentation and React Testing Library documentation for syntax and good practices.

## 🛠 Mocking
Any mock implementations or files should reside in the __mocks__ directories within your src/ directory. Jest will automatically pick them up when running your tests.

## 🔧ESLint and Tests
The ESLint configuration is set up to be aware of Jest, so you won't encounter any linting errors for global variables like describe, it, or expect.

## ⚡Configuration Tips
## 🔄 Fast Refresh
Choose the best Fast Refresh strategy for your project:

- Use **@vitejs/plugin-react** for **Babel-based** Fast Refresh.
- Use **@vitejs/plugin-react-swc** for **SWC-based** Fast Refresh.


## 🛠 ESLint
The template comes with a basic ESLint setup. For a production-grade application, we suggest enhancing the ESLint configuration:
```sh
"parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json", "./tsconfig.node.json"],
    "tsconfigRootDir": "__dirname"
}
```
Opt for stricter TypeScript linting by replacing **plugin:@typescript-eslint/recommended** with either:

- plugin:`@typescript-eslint/recommended-type-checked`
- plugin:`@typescript-eslint/strict-type-checked`

Optionally, add **plugin:@typescript-eslint/stylistic-type-checked**.

Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list