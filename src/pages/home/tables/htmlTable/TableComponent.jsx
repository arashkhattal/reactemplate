import React, { useState } from "react";
import "./Table.css";

function TableComponent() {
  // state to maintain the search
  const [searchTerm, setSearchTerm] = useState("");
  // state to maintain the sort
  const [sortDirection, setSortDirection] = useState("asc");

  // function to handle search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // function to handle sort
  const handleSortChange = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // table data
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 },
    { id: 4, name: "David", age: 35 },
  ];

  // Filter data based on search term
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort data based on sort direction
  const sortedData = filteredData.sort((a, b) =>
    sortDirection === "asc" ? a.age - b.age : b.age - a.age
  );

  return (
    // custom table
    <div>
      <div className="table-head">
        {/* button to sort table data  */}
        <button onClick={handleSortChange} className="my-search-input">
          Sort {sortDirection === "asc" ? "ascending" : "descending"}
        </button>
        {/* search field for table  */}
        <input
          className="my-search-input"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search.."
        />
      </div>

    {/* table component  */}
      <table className="my-table">
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
