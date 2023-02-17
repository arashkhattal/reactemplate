import React, { useState } from "react";

function TableComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

   const data = [
     { id: 1, name: "Alice", age: 25 },
     { id: 2, name: "Bob", age: 30 },
     { id: 3, name: "Charlie", age: 20 },
     { id: 4, name: "David", age: 35 },
   ];


  // Filter data based on search term
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort data based on sort direction
  const sortedData = filteredData.sort((a, b) =>
    sortDirection === "asc" ? a.age - b.age : b.age - a.age
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <button onClick={handleSortChange}>
        Sort {sortDirection === "asc" ? "ascending" : "descending"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
