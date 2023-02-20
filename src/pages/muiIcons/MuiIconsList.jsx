// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Tooltip, Typography } from "@material-ui/core";
// import * as Icons from "@material-ui/icons";
// import "./muiIcons.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   icon: {
//     fontSize: 80,
//     border: "1px solid black",
//     borderRadius: "5px",
//     padding: theme.spacing(2),
//     margin: theme.spacing(1),
//     cursor: "pointer",
//   },
// }));

// const CustomTooltip = () => {
//   const classes = useStyles();
//   const [importLine, setImportLine] = useState(null);

//   const handleIconClick = (iconName) => {
//     setImportLine(`import ${iconName} from '@material-ui/icons/${iconName}';`);
//   };

//   const icons = Object.keys(Icons).map((key) => {
//     const IconComponent = Icons[key];
//     return (
//       <Tooltip title={key} key={key}>
//         <IconComponent
//           className={classes.icon}
//           onClick={() => handleIconClick(key)}
//         />
//       </Tooltip>
//     );
//   });

//   return (
//     <div className={classes.root}>
//       {importLine && (
//         <div className="global_display_flex">
//           <Typography className="import_line code-snippet">
//             <code>{importLine}</code>
//           </Typography>
//         </div>
//       )}
//       <Grid container spacing={2}>
//         {icons}
//       </Grid>
//     </div>
//   );
// };

// export default CustomTooltip;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Tooltip, Typography, InputBase, Paper } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import "./muiIcons.css";
import ScrollToTopButton from "./ScrollBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  icon: {
    fontSize: 80,
    border: "1px solid black",
    borderRadius: "5px",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    cursor: "pointer",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    marginLeft: 0,
    marginBottom: "20px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch",
    },
  },
}));

const CustomTooltip = () => {
  const classes = useStyles();
  const [importLine, setImportLine] = useState(null);
  const [iconName, setIconName] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleIconClick = (iconName) => {
    setImportLine(
      `Import : import ${iconName} from '@material-ui/icons/${iconName}';`
    );
    setIconName(`Icons : <${iconName}/>`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const displayIcons = () => {
    const filteredIcons = Object.keys(Icons)
      .filter((key) => key.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((key) => {
        const IconComponent = Icons[key];
        return (
          <Tooltip title={key} key={key}>
            <IconComponent
              className={classes.icon}
              onClick={() => handleIconClick(key)}
            />
          </Tooltip>
        );
      });

    if (filteredIcons.length === 0) {
      return (
        <div className="text">
          <Typography variant="h6" align="center">
            No icons found (⊙_⊙)?
          </Typography>
        </div>
      );
    }

    return filteredIcons;
  };

  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.search}>
        <InputBase
          placeholder="Search icons"
          className={classes.inputInput}
          inputProps={{ "aria-label": "search icons" }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Paper>
      {importLine && (
        <div className="global_display_flex">
          <Typography className="import_line code-snippet">
            <code>
              {importLine}
              <br />
              {iconName}
            </code>
          </Typography>
        </div>
      )}
      <Grid container spacing={2}>
        {displayIcons()}
      </Grid>
    </div>
  );
};

export default CustomTooltip;
