import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

function App({ name, using, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? "usado aqui" : "no usado aqui"}</p>
      <p>Estamos {status === "Open" ? "Abierto!" : "Cerrado!"}</p>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  using: PropTypes.bool,
  status: PropTypes.oneOf(["Open", "Closed"])
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App name="React" using={true} status="Open" />
);
