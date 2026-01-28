import {Box} from "@mui/material";
import  {type ReactElement} from "react";
import {People} from "../Constants.ts";
import PersonCard from "../components/PersonCard.tsx";
import type {Person} from "../Types.ts";
import * as React from "react";

function About(): ReactElement {
    return (
        <Box sx={{ width: '100vw', margin: 0, padding: 0 }}>
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

export default About;