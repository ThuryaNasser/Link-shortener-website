import React, { useState } from 'react';
import { Button, Paper, Box } from '@mui/material';
import { ContentCopy as ContentCopyIcon, Check as CheckIcon } from '@mui/icons-material';
import { CopyToClipboard } from "react-copy-to-clipboard";

const DisplayArea = (props) => {
  const displayAreaStyle = {
    justifyContent: { xs: 'center', sm: 'space-between' },
    display: 'flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    paddingBottom: '12px',
    paddingLeft: { xs: 0, md: '45px' },
  };

  const paperStyle = {
    marginBottom: '12px',
    padding: ' 0 10px 0 10px',
    backgroundColor: '#b69ee2',
    color: '#fff',
    fontSize: '25px',
    width: { sm: '25ch', md: '35ch', },
    marginLeft: { md: '15%', lg: '30%', },
  };

  const buttonStyle = {
    justifyContent: 'center',
    backgroundColor: ' #ff4e9c',
    color: '#fff',
    mx: { xs: '10px' },
    marginRight: { xs: 0, md: '50px' },
  };

  const {
    shortUrl = ''
  } = props

  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Box sx={{ ...displayAreaStyle }}>
      <Box >
        <Paper sx={{ ...paperStyle }} elevation={3}>
          {shortUrl}
        </Paper>
      </Box>
      <Box >
        {shortUrl &&
          <CopyToClipboard text={shortUrl} onCopy={onCopyText}>
            <Button
              sx={{ ...buttonStyle }}
              variant="contained"
              startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon />}>
              COPY
            </Button>
          </CopyToClipboard>
        }
      </Box>
    </Box>
  );
}

export default DisplayArea;