import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Paper } from '@mui/material';
import { CopyToClipboard } from "react-copy-to-clipboard";

const DisplayArea = (props) => {
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
    <div className="display-area">
      <div >
        <Paper
          elevation={3}
          className="short-link">
          {shortUrl}
        </Paper>
      </div>
      <div >
        {shortUrl &&
          <CopyToClipboard text={shortUrl} onCopy={onCopyText}>
            <Button
              variant="contained"
              className="copy-button"
              startIcon={isCopied? <CheckIcon />:<ContentCopyIcon/>}
            >
              COPY
            </Button>
          </CopyToClipboard>
        }
      </div>
    </div>
  );
}

export default DisplayArea;