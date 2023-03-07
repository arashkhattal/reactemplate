import React, { useState } from "react";
import {
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const columns = [
  { id: "name", label: "Name", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 150 },
  { id: "age", label: "Age", minWidth: 50 },
];

const data = [
  { name: "John Doe", email: "johndoe@example.com", age: 25 },
  { name: "Jane Doe", email: "janedoe@example.com", age: 30 },
  { name: "Bob Smith", email: "bobsmith@example.com", age: 40 },
  { name: "Alice Johnson", email: "alicejohnson@example.com", age: 35 },
  { name: "Tom Brown", email: "tombrown@example.com", age: 45 },
  { name: "Sara Lee", email: "saralee@example.com", age: 20 },
  { name: "Peter Parker", email: "peterparker@example.com", age: 28 },
  { name: "Mary Jane", email: "maryjane@example.com", age: 26 },
  { name: "Clark Kent", email: "clarkkent@example.com", age: 33 },
  { name: "Bruce Wayne", email: "brucewayne@example.com", age: 38 },
];

const BasicTable = () => {
  // state to maintain table data
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortData, setSortData] = useState(data);

  console.log("initial :", sortData);

  // function to handle page change
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // function to handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  // filtered data
  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // function to handle sorting
  const handleSort = (columnId) => {
    const isAsc = sortColumn === columnId && sortDirection === "asc";
    setSortColumn(columnId);
    setSortDirection(isAsc ? "desc" : "asc");
    const sortedData = filteredData.sort((a, b) => {
      if (a[columnId] < b[columnId]) {
        return isAsc ? -1 : 1;
      }
      if (a[columnId] > b[columnId]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });
    setSortData(sortedData);
  };

  console.log("Arash :", sortData);
  return (
    <div>
      <div className="table-head">
        <div></div>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </div>
      {/* table container  */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                  sortDirection={sortColumn === column.id ? true : false}
                >
                  {/* <TableSortLabel
                    active={sortColumn === column.id}
                    direction={sortColumn === column.id ? "desc" : "asc"}
                    onClick={handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel> */}
                  {/* <TableSortLabel
                    active={sortColumn === column.id}
                    direction={sortColumn === column.id ? sortDirection : "asc"}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel> */}
                  <TableSortLabel
                    active={sortColumn === column.id}
                    direction={sortColumn === column.id ? sortDirection : "asc"}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* filter data according to search and pagination  */}
            {sortData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* pagination component  */}
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default BasicTable;
