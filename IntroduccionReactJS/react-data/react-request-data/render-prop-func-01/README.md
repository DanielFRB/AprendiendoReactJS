# Getting Started with Create React App

This is an example of how we can Render props, In this case, we render a React fragment
that displays the item’s name and elevation. If the array is tahoe_peaks, we expect the
renderItem property to be invoked four times: once for each of the peaks in the array.

When the data array is not empty, the List component renders an unordered list, "ul".
It maps over each item within the array using the .map method and renders a list item,
"li", for every value within the array. The List component makes sure each list item
receives a unique key. Within each "li" element, the renderItem property is invoked
and the item itself is passed to that function property as an argument. The result is
an unordered list that displays the name and elevation of each of Tahoe’s tallest peaks.

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
