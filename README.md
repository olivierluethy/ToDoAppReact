# ToDoAppReact

A simple to-do list web app built with React, with tasks stored in and synced live from a Firebase Realtime Database.

## Features

- Add, edit and delete tasks.
- Tasks persist in a Firebase Realtime Database and update in real time via `onValue` subscriptions.
- Minimal, component-based UI (`TaskForm`, `TaskList`).

## Tech

- **React 18** (bootstrapped with Create React App)
- **Firebase 9** Realtime Database
- `uuid` for generating IDs

## Run

Requires Node.js.

```bash
git clone https://github.com/olivierluethy/ToDoAppReact.git
cd ToDoAppReact
npm install
npm start
```

Then open <http://localhost:3000>.

The Firebase web config lives in `src/firebase.js`. The values there are Firebase's public client config (safe to expose in the browser); access is meant to be controlled through Firebase Realtime Database security rules. To point the app at your own database, replace that config with your own project's settings.

## Project structure

- `src/App.js` — main component, wires up add/edit/delete against the database
- `src/TaskForm.js` — input form for new tasks
- `src/TaskList.js` — renders the task list with edit/delete
- `src/firebase.js` — Firebase initialization and database reference

## Available scripts

- `npm start` — run the dev server
- `npm run build` — production build into `build/`
- `npm test` — run tests
