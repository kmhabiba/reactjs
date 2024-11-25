import React, { useState } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Mui() {
    const [color, setColor] = useState("primary");
    const [disableBtn, setDisableBtn] = useState(false);

    const handleClick = () => {
        alert(`Button Clicked`);
        setColor("info");
        setDisableBtn(false);
    };

    return (
        <div className="app">
             <h1 className = "navbar-align"> Material UI Example</h1>
             <p className = "content-below-heading">This is the content of MUI</p>
            <h1>React Material UI</h1>
            <Button
                color={color}
                disabled={disableBtn}
                variant="contained"
                onClick={handleClick}
                endIcon={<DeleteIcon />}
            >
                Click ME
            </Button>
        </div>
    );
}

export default Mui;