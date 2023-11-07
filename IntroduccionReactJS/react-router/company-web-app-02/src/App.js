import React from 'react';
import { useRoutes } from 'react-router-dom';
import { 
  Home, About, Events, 
  Products, Contact, Services, 
  History, Location, Whoops404 } from './components/pages';

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "about",
      element: <About />,
      children: [
        { path: "services", element: <Services /> },
        { path: "history", element: <History /> },
        { path: "location", element: <Location /> }
      ]
    },
    { path: "events", element: <Events /> },
    { path: "products", element: <Products /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <Whoops404 /> }
  ]);
  return element;
};

export default App;
