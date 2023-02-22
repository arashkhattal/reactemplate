import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../htmlTable/Table.css";
import { Typography } from "@mui/material";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

// table Data
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    37,
    4.3
  ),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  // state to maintain searh item
  const [searchTerm, setSearchTerm] =
    React.useState("");

  // function to handle search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = rows.filter((row) =>
    Object.values(row).some((value) =>
      value
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  console.log(filteredData);

  return (
    <TableContainer>
      <div className="table-head">
        <div></div>
        {/* search bar for table */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="my-search-input"
          placeholder="Search..."
        />
      </div>
      {/* table component  */}
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              Dessert (100g serving)
            </TableCell>
            <TableCell align="right">
              Calories
            </TableCell>
            <TableCell align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right">
              Protein&nbsp;(g)
            </TableCell>
            <TableCell align="right">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "440px",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  margin: "50px",
                  background: "lightgrey",
                  textAlign: "center",
                }}
              >
                {" "}
                No Data
              </Typography>
            </div>
          ) : (
            filteredData.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th":
                    { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.calories}
                </TableCell>
                <TableCell align="right">
                  {row.fat}
                </TableCell>
                <TableCell align="right">
                  {row.carbs}
                </TableCell>
                <TableCell align="right">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
