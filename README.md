# Dynamic form generation based on a JSON file

## Trello dashboard 
https://trello.com/b/fjK1CPN6/aleacontrol

## Requirements

* NodeJS 10.15.2


## Installation
In the project directory:
### `npm install` 

## Documentation

### `npm run docz:dev`
Generates development component documentation and serves it at [http://localhost:4000](http://localhost:4000).

### `npm run docz:build`
Generates production build component documentation, outputs to `/.docz/dist`


## Scripts
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>


### `npm run eslint`
Check for linting errors.

### `npm run eslint:fix`
Check and fix linting errors.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Husky
Husky has a Git hook for running the tests and eslinting before commiting
 for avoiding bad commits.
 Check `package.json` for the Husky settings.
 
 This feature is under testing and might not work in every IDE or environment.
