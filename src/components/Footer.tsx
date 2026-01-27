import * as React from "react";
import {Box, Divider, Typography} from "@mui/material";


export default function Footer(): React.JSX.Element {
    return (
        <Box>
            <Divider />
            <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                sx={{ fontStyle: "italic", fontSize: "1rem" }}
            >
                Copyright © Potion Studios 2026
            </Typography>
        </Box>
    );
}