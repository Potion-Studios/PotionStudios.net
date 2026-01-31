import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./RootLayout.tsx";
import About from "./pages/about.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "discord",
                loader: (): null => {
                    window.location.href = "https://discord.com/invite/vP3PBGvgdW";
                    return null;
                }
            },
            {
                path: "modrinth",
                loader: (): null => {
                    window.location.href = "https://modrinth.com/organization/potion-studios";
                    return null;
                }
            },
            {
                path: "github",
                loader: (): null => {
                    window.location.href = "https://github.com/Potion-Studios";
                    return null;
                }
            },
            {
                path: "support-us",
                loader: (): null => {
                    window.location.href = "https://www.patreon.com/potionstudios";
                    return null;
                }
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
