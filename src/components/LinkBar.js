import React from "react";
import InputBase from "@mui/material/InputBase";
import LinkIcon from "@mui/icons-material/Link";

const LinkBar = (props) => {
    const {
        setLongUrl = () => { },
    } = props

    const onChange = (event) => {
        setLongUrl(event.target.value);
    };

    return (
        <div className="link-bar-style">
            <div className="link-icon-wrapper">
                <LinkIcon />
                <InputBase
                    className="link-input-style"
                    placeholder="Paste your link here "
                    inputProps={{ "aria-label": "url", className: "link-input-style" }}
                    onChange={onChange}
                />
            </div>
        </div>

    )
}

export default LinkBar;