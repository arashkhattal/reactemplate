import React from "react";
import Table from "./TableComponent";

function App() {
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 },
    { id: 4, name: "David", age: 35 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;
