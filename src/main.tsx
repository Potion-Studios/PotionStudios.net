import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createHashRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./RootLayout.tsx";
import About from "./pages/about.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
