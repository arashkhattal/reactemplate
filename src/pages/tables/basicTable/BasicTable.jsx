import React, { useState } from "react";
import {
  Chip,
  Icon,
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
  { id: "age", label: "Age", minWidth: 10 },
  { id: "status", label: "Status", minWidth: 10 },
  { id: "action", label: "Action", minWidth: 50 },
];

const data = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    age: 30,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Bob Smith",
    email: "bobsmith@example.com",
    age: 40,
    status: <Chip size="small" label="Active" color="error" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    age: 35,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Tom Brown",
    email: "tombrown@example.com",
    age: 45,
    status: <Chip size="small" label="Active" color="error" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Sara Lee",
    email: "saralee@example.com",
    age: 20,
    status: <Chip size="small" label="Active" color="error" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Peter Parker",
    email: "peterparker@example.com",
    age: 28,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Mary Jane",
    email: "maryjane@example.com",
    age: 26,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Clark Kent",
    email: "clarkkent@example.com",
    age: 33,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
  {
    name: "Bruce Wayne",
    email: "brucewayne@example.com",
    age: 38,
    status: <Chip size="small" label="Active" color="success" />,
    action: (
      <>
        <Icon fontSize="small" sx={{ cursor: "pointer" }}>
          edit
        </Icon>

        <Icon
          fontSize="small"
          sx={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
        >
          delete
        </Icon>
      </>
    ),
  },
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
    setSortData(
      filteredData.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (a[sortColumn] > b[sortColumn]) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      })
    );

    if (event.target.value.length === 0) {
      setSortData(data);
    }
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
          onChange={(e) => handleSearch(e)}
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
