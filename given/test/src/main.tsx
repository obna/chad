import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'
import '@fontsource/roboto/300.css'
//Pages
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Explore from './pages/Explore.tsx'
import Profile from './pages/Profile.tsx'
import Error from './pages/Error.tsx'
//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //default page
    errorElement: <Error/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
