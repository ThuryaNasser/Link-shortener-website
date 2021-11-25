import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { pink, orange, green } from "@mui/material/colors";
import LinkBar from "./LinkBar";

const MainBar = (props) => {

const Icons= ()=>{
return (
  <>
<CircleIcon sx={{ color: pink[500], p: 0.3 }} />
                <CircleIcon sx={{ color: orange[300], p: 0.3 }} />
                <CircleIcon sx={{ color: green[500], p: 0.3 }} />
                </>
);}


    return (
        <Box sx={{ flexGrow: 1, width:"50%" }}>
          <div  className="main-bar">
            <Toolbar>
              <Icons/>
              <Typography
                variant="h6"
                noWrap
                sx={{ 
                  flexGrow: -1,
                   display: { xs: "none", sm: "block" } ,
                   mr: 5,
                   ml:3
                  }}
              >
                URL
              </Typography>
              <LinkBar/>
            </Toolbar>
          </div>
        </Box>
      );
}

export default MainBar;