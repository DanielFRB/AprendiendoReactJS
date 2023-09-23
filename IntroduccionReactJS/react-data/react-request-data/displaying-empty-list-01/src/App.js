import React from "react";

function List({ data = [], renderEmpty }) {
  if (!data.length) return renderEmpty;
  return <p>{data.length} items</p>
}

export default function App() {
  return <List renderEmpty={<p>Esta lista esta vacia</p>} />
}
