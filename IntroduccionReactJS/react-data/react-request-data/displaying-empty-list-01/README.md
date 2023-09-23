# Getting Started with Create React App

This is an example of how we can Render props. In JavaScript, arrays either
contain values or they’re empty. When a list is empty, we need to display a
message to our users. However, that message may change upon implementation.

In this example, we can pass a component to render when the list is empty.
The List component expects two properties: data and renderEmpty. The first argument,
data, represents the array of items that are to be mapped over. Its default value
is an empty array. The second argument, renderEmpty, is a component that will be
rendered if the list is empty.

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
