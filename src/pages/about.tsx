import {Box, Container, Typography} from "@mui/material";
import  {type ReactElement} from "react";
import {People} from "../Constants.ts";
import PersonCard from "../components/PersonCard.tsx";
import type {Person} from "../Types.ts";
import * as React from "react";
import forestImg from "../assets/forest1.png";

export default function About(): ReactElement {
    return (
        <Box sx={{ width: '100vw', margin: 0, padding: 0 }}>

            <Box sx={{ height: '70vh', width: '100%' }}>
                <Box
                    sx={{
                        height: '100%',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${forestImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <Container>
                        <Typography variant="h2" sx={{ fontWeight: 1000 }}>
                            Who are we
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 2, fontStyle: 'italic' }}>
                            Potion Studios!
                        </Typography>
                    </Container>
                </Box>
            </Box>

            <Box sx={{
                display: "grid",
                py: 8,
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(2, minmax(0, 1fr))"
                },
                gap: 3,
                padding: 3
            }}>
                {People.map((person: Person): React.JSX.Element => (<PersonCard person={person} />))}
            </Box>
        </Box>
    )
}
