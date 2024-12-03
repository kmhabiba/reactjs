import React, { useState } from "react";
import {
    Button,
    Alert,
    Snackbar,
    Tooltip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Mui() {
    const [color, setColor] = useState("primary");
    const [disableBtn, setDisableBtn] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
        setSnackbarOpen(true);
        setColor("info");
        setDisableBtn(true);

        setTimeout(() => {
            setShowAlert(false);
            setDisableBtn(false);
        }, 3000);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="app">
            <h1 className="navbar-align">Material UI Example</h1>
            <p className="content-below-heading">This is the content of MUI</p>
            <h1>React Material UI</h1>
            {showAlert && (
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Here is a gentle confirmation that your action was successful.
                </Alert>
            )}
            <Tooltip title="Click to trigger action" arrow>
                <Button
                    color={color}
                    disabled={disableBtn}
                    variant="contained"
                    onClick={handleClick}
                >
                    Click ME
                </Button>
            </Tooltip>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Action was successful!"
            />
            <Accordion style={{ marginTop: "5px", padding: "0px", minHeight: "auto", borderRadius: "5px" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    style={{ minHeight: "auto", padding: 0, fontSize: "14px", display: "flex", alignItems: "center" }}>
                    <Typography>what is material ui components</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "8px" }}>
                    <Typography style={{ fontSize: "12px" }}>
                    Material-UI (MUI) is a CSS framework that provides React components
                     out-of-the-box and follows Google’s Material Design launched in 2014. 
                     MUI makes it possible to use different components to create a UI for a 
                     company’s web and mobile apps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Mui;