import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

function App({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App name="React" />
);
