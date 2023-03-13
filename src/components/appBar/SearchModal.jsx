import React from "react";
import {
  Grid,
  Card,
  TextField,
  Divider,
  Box,
  Input,
  Button,
  Typography,
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../../context/globalContext";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  maxWidth: "600px",
  maxHeight: "95vh",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const searchData = [
  { id: 1, name: "Line Chart", link: "/chart" },
  { id: 2, name: "Bar Chart", link: "/chart" },
  { id: 3, name: "Stacked Bar Chart", link: "/chart" },
  { id: 4, name: "TimeLine Chart", link: "/chart" },
  { id: 5, name: "Basic TimeLine Chart", link: "/chart" },
  { id: 6, name: "Donut Chart", link: "/chart" },
  { id: 7, name: "Pie Chart", link: "/chart" },

  { id: 8, name: "Basic Table", link: "/table" },
  { id: 9, name: "Sort & select Table", link: "/table" },

  { id: 10, name: "Mui Icons", link: "/muiicons" },

  { id: 11, name: "Loader", link: "/loading" },

  { id: 12, name: "Input Fields", link: "/inputfield" },

  { id: 13, name: "Tooltips", link: "/tooltips" },

  { id: 14, name: "Sun Editor", link: "/suneditor" },

  { id: 15, name: "Calendar", link: "/fullcalendar" },

  { id: 16, name: "Upload single File", link: "/uploadfiles" },
  { id: 17, name: "Upload Multiple File", link: "/uploadfiles" },

  { id: 18, name: "Profile", link: "/profile" },

  { id: 19, name: "Notification", link: "/pushnotification" },

  { id: 20, name: "Messages", link: "/messages" },

  { id: 21, name: "Forms", link: "/inputForm" },
];

const SearchModal = ({ searchModal, setSearchModal }) => {
  // global function
  const { setAlert } = useGlobalContext();

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (event, value) => {
  //   if (!value) {
  //     setSearchResults([]);
  //     return;
  //   }
  //   setSearchResults(
  //     searchData.filter((data) =>
  //       data.name.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  // };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filteredResults = searchData.filter((data) =>
      data.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (searchResults.length > 0) {
      setSearchResults([]);
    } else {
      setSearchResults(filteredResults);
    }
  };

  const handleResultClick = (result) => {
    setSearchModal(false); // Close the search modal
  };

  return (
    // modal component from mui
    <Modal open={searchModal} onClose={() => setSearchModal(false)}>
      {/* card component from mui  */}
      <Card sx={style}>
        {/* Typography component from mui */}
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
            fontWeight: "bold",
            fontSize:"14px"
          }}
        >
            Search Your Component
          {/* <Autocomplete
            id="search-autocomplete"
            options={searchData}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) =>
              value ? <Link to={value.link} /> : null
            }
            renderInput={(params) => (
              <TextField {...params} label="Search" variant="outlined" />
            )}
          /> */}
        </Typography>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
          />
        <List>
          {searchResults.map((result) => (
            <ListItemButton
              component={Link}
              to={result.link}
              onClick={() => handleResultClick(result)}
              button
              key={result.id}
            >
              <ListItemText primary={result.name} />
            </ListItemButton>
          ))}
        </List>
      </Card>
    </Modal>
  );
};
export default SearchModal;
