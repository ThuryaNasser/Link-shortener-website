import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const ShortenerButton = (props) => {
    const jenratenewurl = () => {
      
      }
    return (
        <Stack direction="row"  className="shortener-button" spacing={2} >
                <Button 
                variant="contained" 
                endIcon={<SendIcon />}
                onClick={() => {
                    alert('clicked');
                  }}
                >
                    SHORT IT
                </Button>
                <Button 
                variant="outlined"
                 startIcon={<DeleteIcon />}
                 disabled>
                    COPY
                </Button>
        </Stack>
    );
}


export default ShortenerButton;