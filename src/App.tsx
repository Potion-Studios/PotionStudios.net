import {type ReactElement} from 'react'
import './App.css'
import {Box} from "@mui/material";
import Carousel from "./components/Carousel.tsx";
import {ModEntries} from "./Constants.ts";
import ModEntryCard from "./components/ModEntryCard.tsx";
import * as React from "react";
import type {ModEntry} from "./Types.ts";

export default function App(): ReactElement {
  return (
      <Box sx={{ width: '100vw', margin: 0, padding: 0 }}>
      <Carousel />

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
          {ModEntries.map((modEntry: ModEntry): React.JSX.Element => <ModEntryCard entry={modEntry}/>)}
      </Box>
    </Box>
  )
}
