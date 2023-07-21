# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the previous example use-reducer-01, we built a Checkbox component that holds a simple state.
We sent a function that takes in the current value of checked and returns the opposite, !checked.
But sometimes developers can make a mistake for sending a wrong information and cause a failure.
In this time we will use a new function that handle the setChecked and return the opposite of the current value of checked.
This is better. onChange is set to a predictable value the new function
This example will drive us to implement the useReducer hook.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.