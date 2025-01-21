import { useState } from 'react'
import './App.css'

// mui components
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Avatar } from '@mui/material'
import { blueGrey, purple, yellow } from '@mui/material/colors'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Typography variant="h1">Hello World</Typography>
    <Typography variant="subtitle2">you there</Typography>
    <Typography variant="subtitle1">Hi sunshine</Typography>    
    <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eligendi quos unde nulla, alias commodi enim blanditiis, magni neque accusamus ipsam ratione quaerat repudiandae veniam eveniet consequatur voluptates tenetur reiciendis!</Typography>
    <Button variant="outlined">press</Button>
    <Avatar sx={{ bgcolor: yellow[500] }}>OK</Avatar>
    <Avatar alt="Spelman College" 
      src="src/assets/windchime.jpeg" 
      sx={{ width: 80, height: 80 }}> </Avatar>


    </>
  )
}

export default App