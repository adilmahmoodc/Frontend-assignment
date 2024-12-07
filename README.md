## Technology stack

* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Ant Design](https://ant.design/)
* [axios](https://github.com/axios/axios)

Recommendations:

* Please check `package.json` before adding any dependency, it may turn out that there is already
  what you need.
* Please use [bundlephobia.com](https://bundlephobia.com/) when choosing a library.

## How to run the project locally

First, you need to have Node.js installed, to do so we recommend installing and using
[nvm](https://github.com/nvm-sh/nvm), to manage node.js versions per projects.

Once in your local repo directory, use the command `nvm use`: it will install the node.js version
specified in the .nvmrc file.

Install all needed dependencies (use `npm install` when adding or
upgrading dependencies, it will re-write `package-lock.json`)

Finally, run `npm run dev` to run project locally on [localhost:5173](http://localhost:5173)

## Redux

For binding React to Redux, we use React-Redux, and more specifically
the [hooks](https://react-redux.js.org/api/hooks) it provides (instead of the more generic and older
connect() HOC).

## Using UI kit

We use [Ant Design](https://ant.design/) as UI kit.

## Writing tests

We write tests on React components and unit-tests on functions with complex logical part.
There is a Jest, `react-dom/test-utils` and `@testing-library/react`.

You can find more details about tests writing:

1. [Create React App: Running Tests](https://create-react-app.dev/docs/running-tests)
2. [React Testing Recipes](https://reactjs.org/docs/testing-recipes.html)

## Available Scripts

In the project directory, you can run:

### `npm run test`

Launches the test runner in the interactive watch mode.

See the section
about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.