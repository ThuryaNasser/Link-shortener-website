import React from 'react';
import Button from '@mui/material/Button';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Stack from '@mui/material/Stack';
import shortenUrl from '../services/shortenUrl';

const ShortenerButton = (props) => {
  const {
    longUrl = '',
    setShortUrl=()=>{},
  } = props

  const shortUrlService=()=> {
    shortenUrl(longUrl,setShortUrl)
    }

    return (
    <Stack direction="row" sx={{m: 2}}>
      <Button
        variant="contained"
        endIcon={<ContentCutIcon />}
        onClick={shortUrlService}>
      Shorten
      </Button>
    </Stack>
  );
}

export default ShortenerButton;