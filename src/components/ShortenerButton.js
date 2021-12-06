import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const ShortenerButton = (props) => {
  const {
    longUrl = '',
    setShortUrl=()=>{},
  } = props
  const shortUrlService=()=> {
    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer bafc1e3be3aa6cf1be314eb910e6baca622be716',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "long_url": longUrl, "domain": "bit.ly" })
    })
      .then(response => response.json())
      .then(data => {setShortUrl(data.link);})
      .catch(e => setShortUrl(e));
    }

    return (
    <Stack direction="row" className="shortener-button">
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={shortUrlService}
      >
        SHORT IT
      </Button>
    </Stack>
  );
}


export default ShortenerButton;