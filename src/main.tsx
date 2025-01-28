import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'
import '@fontsource/roboto/300.css'

// TSX files
import App from './App.tsx'
import Home from "./pages/Home.tsx"
import Explore from './pages/Explore.tsx'
import Profile from './pages/Profile.tsx'
import Error from './pages/Error.tsx'

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
 
  {
  path: '/',
  element: <App/>,  //App.tsx file
  errorElement: <Error />,
  },
  {
    path: '/explore',
    element: <Explore/>  //Explore.tsx file
  },

  {
    path: '/home',
    element: <Home/>  //Home.tttsx file
  },
  {
    path: '/profile',
    element: <Profile/>  //Home.tttsx file
  },
    
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)