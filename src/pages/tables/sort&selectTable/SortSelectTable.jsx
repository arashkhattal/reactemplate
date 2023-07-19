import React, { useState } from "react";
import MaterialTable from "material-table";

// table data
const empList = [
  { id: 1, name: "Neeraj", email: "neeraj@gmail.com", status: 0, role: 1 },
  { id: 2, name: "Raj", email: "raj@gmail.com", status: 1, role: 0 },
  { id: 3, name: "David", email: "david342@gmail.com", status: 1, role: 3 },
  { id: 4, name: "Vikas", email: "vikas75@gmail.com", status: 0, role: 2 },
];

function SelectSortTable() {
  // state to store the column data
  const [data, setData] = useState(empList);
  // state to maintain selectd data
  const [selectedRows, setSelectedRows] = useState([]);
  // table column
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Status", field: "status" },
    { title: "Role", field: "role" },
  ];


  // function to handle selected data
  const handleDeleteSelectedRows = () => {
    const idsToDelete = selectedRows.map((row) => row.id);
    const newData = data.filter((row) => !idsToDelete.includes(row.id));
    setData(newData);
    setSelectedRows([]);
  };

  return (
    <div className="App">
      <MaterialTable
        title="Employee Data"
        data={data}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        columns={columns}
        options={{
          selection: true,
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete all selected rows",
            onClick: handleDeleteSelectedRows,
            disabled: selectedRows.length === 0,
          },
          // {
          //   icon: "filter",
          //   tooltip: "Filter",
          //   onClick: handleDeleteSelectedRows,
          //   disabled: false,
          // },
        ]}
      />
    </div>
  );
}

export default SelectSortTable;
