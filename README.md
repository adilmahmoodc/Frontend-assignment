# UserExplorer App

## 📝 OverView

This project presents a list of users, each with various attributes, and allows users to search and view detailed information about any specific individual. The user list serves as a collection of profiles, where you can easily find and access the details of each user.

## 🌟 Technology Stack

- [📝 Typescript](https://www.typescriptlang.org/)
- [⚛️ React](https://reactjs.org/)
- [📦 Redux](https://redux.js.org/)
- [🎨 Ant Design](https://ant.design/)

### 🗃️ Redux

For binding React to Redux, we use React-Redux, and more specifically the [hooks](https://react-redux.js.org/api/hooks) it provides (instead of the more generic and older connect() HOC).

### 🎨 Using the UI Kit

We use [Ant Design](https://ant.design/) as UI kit.

### 🧪 Writing Tests

We write tests on React components and unit-tests on functions with complex logical parts. There is a Jest, `react-dom/test-utils` and `@testing-library/react`.

You can find more details about writing tests:

1. [Create React App: Running Tests](https://create-react-app.dev/docs/running-tests)
2. [React Testing Recipes](https://reactjs.org/docs/testing-recipes.html)

### 💡 Recommendations

- ✅ Check the `package.json` file before adding any dependency; it may already include what you need.
- 🕵️ Use [bundlephobia.com](https://bundlephobia.com/) when choosing a library to evaluate the size impact on the bundle.

---

## 🏃 How to Run the Project Locally

1. **Install Node.js**

   - 📌 It's recommended to use [nvm](https://github.com/nvm-sh/nvm) for managing Node.js versions.

2. **Navigate to the Local Repository**

   - Use the following command:

   ```
   nvm use
   ```
   This will install the Node.js version specified in the `.nvmrc` file. Ensure Node.js version is **>=18**.

3. **Install Dependencies and Run the Development Server**
```
  npm install
  npm run dev
```

🚀 The project will run on http://localhost:5173.

 To build the project, run the command
 ```
  npm run build
  ```

### 📜 For Test Cases

In the project directory, you can run:
```
npm run test
```

Launches the test runner in interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 🛠️ Check Code Quality

We use ESLint to ensure code consistency and quality.

To check for any linting issues, use the following command:
```
npm run lint
```

To automatically fix linting issues (if possible), run:
```
npm run lint --fix
```

### 🚀 Deployment to GitHub Pages

run the following command
```
npm run deploy
```

The application will serve on (https://adilmahmoodc.github.io/Frontend-assignment/)