import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

type AppProps = {
  item: string;
}

function App({ item }: AppProps) {
  const [fabricColor, setFabricColor] = useState("purple");
  return (
    <div>
      <h1>
        {fabricColor} {item}
      </h1>
      <button onClick={() => setFabricColor("blue")}>
        Make the Jacket Blue
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App item="jacket" />
);
