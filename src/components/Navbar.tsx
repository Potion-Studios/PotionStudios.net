import * as React from "react";
import {useState, useEffect} from "react";
import {Container, AppBar, Toolbar, Typography, Button, Box} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../assets/potionstudios.png";

type NavItem =
    | { label: string; type: "internal"; to: string }
    | { label: string; type: "external"; href: string };

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

    const navItems: NavItem[] = [
        { label: "Home", type: "internal", to: "/" },
        { label: "About", type: "internal", to: "/about" },
        { label: "Discord", type: "external", href: "https://discord.com/invite/vP3PBGvgdW" },
        { label: "Modrinth", type: "external", href: "https://modrinth.com/organization/potion-studios" },
        { label: "GitHub", type: "external", href: "https://github.com/Potion-Studios" },
        { label: "Support us", type: "external", href: "https://www.patreon.com/potionstudios" },
    ];

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
                                height: isScrolled ? 55 : 75,
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

                    <Box sx={{ display: "flex", gap: 2 }}>
                        {navItems.map((item: NavItem): React.JSX.Element => {
                            const commonSx = {
                                color: isScrolled ? "black" : "white",
                                fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontWeight: 800,
                                fontSize: "0.75rem",
                                letterSpacing: "1px",
                                padding: "10px 20px",
                                "&:hover": {
                                    color: "rgba(255,255,255,0.7)",
                                    backgroundColor: "transparent",
                                },
                            } as const;

                            if (item.type === "external") {
                                return (
                                    <Button
                                        key={item.label}
                                        component="a"
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={commonSx}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            }

                            return (
                                <Button key={item.label} component={Link} to={item.to} sx={commonSx}>
                                    {item.label}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}