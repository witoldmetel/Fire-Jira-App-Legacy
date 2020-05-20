# ToDo Application in React

## App Info

Simple Todo App (First App in Webpack / React / Redux / Firebase / Semantic UI)

![How-app-works](https://media.giphy.com/media/5ndmImlAKP0PKzSPov/giphy.gif)

Done:

1. User can add task
2. User can delete task
3. User can mark task which is done
4. User can find tasks by searcher
5. User can filter which task is done or not
6. User can edit tasks
7. Connect app with Firebase
8. Add todos to local storage

To do:

1. Checking task numbers if the numbers are not the same
2. After refresh, status of completed task disappears

## Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:8080
npm start

# Build for production
npm run build
```

In config folder you need to add your firebase configuration:

```bash
export const config = {
    apiKey: "Your API KEY",
    authDomain: "your auth domain",
    databaseURL: "your database url",
    projectId: "your project id",
};
```

//@todo: Update documentation

# Usage

Install dependencies

```
yarn
```

Run dev server on http://localhost:8080

```
yarn start
```

Remove develop's assets and cache

```
yarn clean
```

Lint code

```
yarn lint
```

Run unit tests

```
yarn test
```

Build assets for production

```
yarn build
```

Deploy page on GH-Pages

```
yarn deploy
```
