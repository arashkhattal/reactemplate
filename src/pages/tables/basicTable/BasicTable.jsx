import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import { InputAdornment, TableSortLabel, TextField } from "@mui/material";
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSort = (columnId) => {
    if (sortColumn === columnId) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };

  // const filteredData = data
  //   .filter((row) =>
  //     Object.values(row)
  //       .join(" ")
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase())
  //   )
  //   .sort((a, b) => {
  //     const aValue = a[sortColumn];
  //     const bValue = b[sortColumn];
  //     if (typeof aValue === "string") {
  //       return sortDirection === "asc"
  //         ? aValue.localeCompare(bValue)
  //         : bValue.localeCompare(aValue);
  //     } else {
  //       return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  //     }
  //   });

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
                  <TableSortLabel
                    active={sortColumn === column.id}
                    direction={sortColumn === column.id ? "desc" : "asc"}
                    // onClick={handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
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
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default BasicTable;
