import { Box } from "@mui/material";
import React from "react";
import MainBar from './components/MainBar';
import img from './images/LinkShortener.png';
function App() {

  const appStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    backgroundImage: `url(${img})`,
    boxSizing: 'border-box',
    backgroundSize: 'cover',
  };

  return (
    <Box sx={{...appStyle}}>
      <MainBar />
    </Box>
  );
}

export default App;
