import * as React from "react";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";


export default function RootLayout(): React.JSX.Element {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}