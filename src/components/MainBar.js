import React, { useState } from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { pink, orange, green } from "@mui/material/colors";
import LinkBar from "./LinkBar";
import ShortenerButton from "./ShortenerButton";
import DisplayArea from "./DisplayArea";

const MainBar = () => {
  const mainBarStyle = {
    padding: '10px 24px 0 24px',
    backgroundColor: '#e9d1ff',
    borderRadius: '20px',
    margin: '10px',
  };
  const toolbarStyle = {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };
  const typographyStyle = {
    flexGrow: -1,
    marginRight: 5,
    marginLeft: 3,
    display: { xs: 'none',sm: 'none',lg:'block' },
  };

  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const Icons = () => {
    return (
      <Box sx={{m:'10px'}}>
        <CircleIcon sx={{ color: pink[500], p: 0.3 }} />
        <CircleIcon sx={{ color: orange[300], p: 0.3 }} />
        <CircleIcon sx={{ color: green[500], p: 0.3 }} />
      </Box>
    );
  }
  return (
    <Box>
      <Box sx={{ ...mainBarStyle }}>
        <Toolbar sx={{ ...toolbarStyle }}>
          <Icons />
          <Typography
            sx={{ ...typographyStyle }}
            variant="h6"
            noWrap
          >
            URL
          </Typography>
          <LinkBar setLongUrl={setLongUrl} />
          <ShortenerButton longUrl={longUrl} setShortUrl={setShortUrl} />
        </Toolbar>
        <DisplayArea shortUrl={shortUrl} />
      </Box>
    </Box>
  );
}

export default MainBar;