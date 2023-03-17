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
  Icon,
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
  {
    id: 1,
    name: "Line Chart",
    link: "/chart/#line-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },
  {
    id: 2,
    name: "Bar Chart",
    link: "/chart/#bar-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },
  {
    id: 3,
    name: "Stacked Bar Chart",
    link: "/chart/#stacked-bar-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },
  {
    id: 4,
    name: "TimeLine Chart",
    link: "/chart/#time-line-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },
  {
    id: 5,
    name: "Basic TimeLine Chart",
    link: "/chart/#basic-time-line-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },
  {
    id: 6,
    name: "Donut Chart",
    link: "/chart/#donut-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },
  {
    id: 7,
    name: "Pie Chart",
    link: "/chart/#pie-chart",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        insights
      </Icon>
    ),
  },

  {
    id: 8,
    name: "Basic Table",
    link: "/table/#basic-table",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        table_chart
      </Icon>
    ),
  },
  {
    id: 9,
    name: "Sort & select Table",
    link: "/table/#sort-table",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        table_chart
      </Icon>
    ),
  },

  // {
  //   id: 10,
  //   name: "Mui Icons",
  //   link: "/muiicons",
  //   icon: (
  //     <Icon fontSize="small" sx={{ cursor: "pointer" }}>
  //       adjust
  //     </Icon>
  //   ),
  // },

  {
    id: 11,
    name: "Loader",
    link: "/loading/#loader",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        hourglass_bottom
      </Icon>
    ),
  },

  {
    id: 12,
    name: "Input Fields",
    link: "/inputfield/#input-fields",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        input_circle
      </Icon>
    ),
  },

  {
    id: 13,
    name: "Tooltips",
    link: "/tooltips/#tooltips",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        pan_tool_alt
      </Icon>
    ),
  },

  {
    id: 14,
    name: "Sun Editor",
    link: "/suneditor/#sun-editor",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        format_size
      </Icon>
    ),
  },

  {
    id: 15,
    name: "Calendar",
    link: "/fullcalendar/#calendar",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        calendar_month
      </Icon>
    ),
  },

  {
    id: 16,
    name: "Upload single File",
    link: "/uploadfiles/#upload-single-file",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        upload
      </Icon>
    ),
  },
  {
    id: 17,
    name: "Upload Multiple File",
    link: "/uploadfiles/#upload-multiple-file",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        upload
      </Icon>
    ),
  },

  {
    id: 18,
    name: "Profile",
    link: "/profile/#profile",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        account_circle
      </Icon>
    ),
  },

  {
    id: 19,
    name: "Notification",
    link: "/pushnotification/#notification",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        notifications
      </Icon>
    ),
  },

  {
    id: 20,
    name: "Messages",
    link: "/messages/#messages",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        chat
      </Icon>
    ),
  },

  {
    id: 21,
    name: "Forms",
    link: "/inputForm/#forms",
    icon: (
      <Icon fontSize="small" sx={{ cursor: "pointer" }}>
        list
      </Icon>
    ),
  },
];

const SearchModal = ({ searchModal, setSearchModal, search, setSearch }) => {
  // global function
  const { setAlert } = useGlobalContext();

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(search);

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
    setSearch(event.target.value);
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
    setSearchResults([]);
    setSearch("");
  };



  return (
    // modal component from mui
    <Modal open={searchModal} onClose={() => setSearchModal(false)}>
      {/* card component from mui  */}
      <Card sx={style} className="global_card">
        {/* Typography component from mui */}
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "14px",
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
          value={search}
          onChange={handleSearch}
          // onBlur={handleSearch}
          onFocus={handleSearch}
        />
        <List>
          {searchResults.map((result) => (
            <div style={{ display: "flex" }}>
              <Box style={{ marginTop: "13px" }}>{result.icon}</Box>
              <ListItemButton
                component={Link}
                to={result.link}
                onClick={() => handleResultClick(result)}
                button
                key={result.id}
              >
                <ListItemText primary={result.name} />
              </ListItemButton>
            </div>
          ))}
        </List>
      </Card>
    </Modal>
  );
};
export default SearchModal;
