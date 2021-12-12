import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { pink, orange, green } from "@mui/material/colors";
import LinkBar from "./LinkBar";
import ShortenerButton from "./ShortenerButton";
import DisplayArea from "./DisplayArea";

const MainBar = (props) => {
const [longUrl, setLongUrl] = useState('');
const [shortUrl, setShortUrl] = useState('');

  const Icons = () => {
    return (
      <>
        <CircleIcon sx={{ color: pink[500], p: 0.3 }} />
        <CircleIcon sx={{ color: orange[300], p: 0.3 }} />
        <CircleIcon sx={{ color: green[500], p: 0.3 }} />
      </>
    );
  }
  
  return (
    <Box className="box-style">
      <div className="main-bar-style">
        <Toolbar className="toolbar">
          <Icons/>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: -1,
              display: { xs: "none", sm: "block" },
              mr: 5,
              ml: 3
            }}
          className="typography"
          >
            URL
          </Typography>
          <LinkBar
          setLongUrl={setLongUrl} />
          <ShortenerButton
          longUrl={longUrl}
          setShortUrl={setShortUrl}
          />
        </Toolbar>
          <DisplayArea
          shortUrl={shortUrl}
          />
      </div>
    </Box>
  );
}

export default MainBar;