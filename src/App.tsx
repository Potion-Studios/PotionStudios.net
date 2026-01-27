import {type ReactElement} from 'react'
import './App.css'
import {Box} from "@mui/material";
import Carousel from "./components/Carousel.tsx";
import {ModEntries} from "./Constants.ts";
import ModEntry from "./components/ModEntry.tsx";

function App(): ReactElement {
  return (
      <Box sx={{ width: '100vw', margin: 0, padding: 0 }}>
      <Carousel />

      <Box sx={{ py: 8 }}>
          {ModEntries.map((modEntry: ModEntry): React.JSX.Element => <ModEntry entry={modEntry}/>)}
      </Box>
    </Box>
  )
}

export default App
