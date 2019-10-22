# Supernova

An opinionated starting point for web applications.

- React, Redux, React Router
- Firebase
  - Real-time and Firestore databases
  - Serverless hosting using Cloud Functions
- SSR (Node, Express)


[Live Demo](http://supernova.yawnch.com)

[Docs](https://yawnch.github.io/supernova)

## Getting Started

### Install project dependencies
- Requires [NodeJS](https://nodejs.org/en/) `>= 10`. [NVM](https://github.com/nvm-sh/nvm) is recommended.
- `npm install -g firebase-tools`
- `git clone git@github.com:yawnch/supernova.git`
- `npm install`

### Usage

All important tasks are executed using NPM scripts. Checkout `package.json` for a complete list. The most important scripts are detailed here.

### Configuration

Copy `.env.example` found in 'config' for each required environment:

```
cp .env.example .env.development
cp .env.example .env.staging
cp .env.example .env.production
```
If you don't have a Firebase project, get started by creating one [here](https://console.firebase.google.com). The config values can be found in your project settings: https://console.firebase.google.com/project/your-project

#### `npm start`

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

```
npx plop Component
npx plop Page
```

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

Coding style is enforced using ESLint. You can also manually run the linter using `npm run lint:fix`.
