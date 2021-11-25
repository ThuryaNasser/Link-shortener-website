import * as React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const LinkBar  = (props) => {
  

  const onChange = (event) => {
    console.log(event.target.value);
  };

  
    return (
        <div className="search-bar-style">
      <div className="search-icon-wrapper">
       <SearchIcon />
     <InputBase
     className="search-input-style"
       placeholder="Paste your link here "
       inputProps={{ "aria-label": "url", className:"search-input-style" }}
       onChange={onChange}
  
       />
       </div>
       </div>
    
    )
    }

    export default LinkBar;