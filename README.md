# React, Firebase, SSR Starter

An opinionated starting point for web applications.

[Live Demo](http://react-firebase-ssr-starter.yawnch.com)

[Docs](https://yawnch.github.io/react-firebase-ssr-starter)

## Getting Started

### Install project dependencies
- Requires [NodeJS](https://nodejs.org/en/) `>= 10`. [NVM](https://github.com/nvm-sh/nvm) is recommended.
- `npm install -g firebase-tools`
- `git clone git@github.com:yawnch/react-firebase-ssr-starter.git`
- `npm install`

### Usage

All important tasks are executed using NPM scripts. Checkout `package.json` for a complete list. The most important scripts are detailed here.

#### `npm run start`

Builds the app in development mode (using [Webpack](https://webpack.js.org/)) and starts a local dev server. Keeps Webpack running in watchmode and updates the app automatically using HMR.

Starts nodemon with the `--inspect` flag, allowing developers to debug the server logs using the Chrome Dev Tools (Navigate Chrome to **`chrome://inspect`).

#### `npm run deploy:<env>`

Creates a new production build and deploys it to Firebase Cloud Functions.

```
npm run deploy:development
npm run deploy:staging
npm run deploy:production
```

## Storybook

> [Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation

`npm run storybook`

## Plop

You can use [Plop](https://plopjs.com/) to scaffold new components automatically.

`npx plop Component`
`npx plop Page`

## Notable Features
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Styled Components](https://www.styled-components.com/)
- [Firebase](https://firebase.google.com/)
- [Express](https://expressjs.com/)
- [Storybook](https://storybook.js.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Plop](https://plopjs.com/)

## Coding Style

[Standard](https://standardjs.com/)

Coding style is enforced using eslint. Eslint is run with the `--fix` option on each commit (via Husky pre-commit hooks). You can also manually run the linter using `npm run lint:fix`.
