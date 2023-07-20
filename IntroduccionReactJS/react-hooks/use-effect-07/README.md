# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is an example of how to use Deep Checking Dependencies.
Sometimes the value passed to the dependency array requires variables in scope.
In this example, the App component contains some words that are children of the WordCount component.
The WordCount component takes in children as a property, but when we press a key, we see the message appearing in the console.
To avoid this behavior que need to use a new hook (useMemo).
The useMemo hook invokes a function to calculate a memoized value.
In computer science in general, memoization is a technique that’s used to improve performance.
In a memoized function, the result of a function call is saved and cached.
Then, when the function is called again with the same inputs, the cached value is returned.
The way useMemo works is that we pass it a function that’s used to calculate and create a memoized value.
The useMemo will only recalculate that value when one of the dependencies has changed.

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
