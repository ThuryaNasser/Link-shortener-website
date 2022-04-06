import React from "react";
import { InputBase, Box } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const LinkBar = (props) => {
    const linkBarBoxStyle = {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '20px',
        backgroundColor: 'rgb(13, 20, 135, 255)',
        opacity: 0.2,
        '&:hover': {
            opacity: 0.4,
        },
    };
    const linkIconStyle = {
        padding: '8px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const inputBaseStyled = {
        color: 'inherit !important',
        paddingLeft: ' 1em',
        width: { sm: '45ch', md: '75ch', }
    };

    const {
        setLongUrl = () => { },
    } = props

    const onChange = (event) => {
        setLongUrl(event.target.value);
    };

    return (
        <Box sx={{ ...linkBarBoxStyle }}>
            <Box sx={{ ...linkIconStyle }}>
                <LinkIcon />
                <InputBase
                    sx={{ ...inputBaseStyled }}
                    placeholder="Paste your link here "
                    inputProps={{ "aria-label": "url" }}
                    onChange={onChange}
                />
            </Box>
        </Box >
    )
};

export default LinkBar;