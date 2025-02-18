import { useState } from 'react'
import './App.css'

// mui components
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Avatar } from '@mui/material'
import { yellow } from '@mui/material/colors' //blueGrey, purple, 
import { TextField } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Typography variant="h1">Hello World</Typography>
    <Typography variant="subtitle2">you there</Typography>
    <Typography variant="subtitle1">Hi sunshine</Typography>    
    <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eligendi quos unde nulla, alias commodi enim blanditiis, magni neque accusamus ipsam ratione quaerat repudiandae veniam eveniet consequatur voluptates tenetur reiciendis!</Typography>
    <Button variant="outlined" sx={{ width: '10%', aspectRatio:1/1 }} >press</Button>
    <Avatar sx={{ bgcolor: yellow[500] }}>OK</Avatar>
    <Avatar alt="Spelman College" 
      src="src/assets/windchime.jpeg" 
      sx={{ width: 80, height: 80 }}> </Avatar>

    <TextField variant='filled' label="fill in:">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum expedita, facere veniam vel voluptates adipisci autem doloremque tempora velit itaque. Ab nulla doloremque beatae consequuntur hic totam, quam velit.</TextField>
    </>
  )
}

export default App