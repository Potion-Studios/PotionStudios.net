import * as React from "react";
import {useState, useEffect} from "react";
import {Container, AppBar, Toolbar, Typography, Button, Box} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../assets/potionstudios.png";


export default function Navbar(): React.JSX.Element {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect((): () => void => {
        const handleScroll: () => void = (): void => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return (): void => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fontStyle = '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: isScrolled ? "white" : "transparent",
                boxShadow: isScrolled ? 4 : 0,
                transition: "all 0.3s ease-in-out",
                py: isScrolled ? 0.5 : 1,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            gap: 1.5
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Potion Studios Logo"
                            sx={{
                                height: isScrolled ? 35 : 45,
                                width: "auto",
                                transition: "height 0.3s ease-in-out",
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                color: isScrolled ? "black" : "white",
                                fontFamily: fontStyle,
                                fontWeight: 800,
                                letterSpacing: '-0.5px',
                                fontSize: isScrolled ? '1.1rem' : '1.25rem',
                                transition: 'font-size 0.3s ease-in-out',
                            }}
                        >
                            Potion Studios
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {["Home", "About", "Discord", "Support us"].map((item: string): React.JSX.Element => (
                            <Button
                                key={item}
                                component={Link}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                sx={{
                                    color: isScrolled ? "black" : "white",
                                    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                    fontWeight: 800,
                                    fontSize: "0.75rem",
                                    letterSpacing: "1px",
                                    padding: '10px 20px',
                                    '&:hover': {
                                        color: "rgba(255,255,255,0.7)",
                                        backgroundColor: 'transparent'
                                    }
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}