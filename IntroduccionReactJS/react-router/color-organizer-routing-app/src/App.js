import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import { ColorDetails } from './components/ColorDetails';
import './components/Colors.css';
import ColorProvider from './components/ColorProvider';

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        />
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  );
};
