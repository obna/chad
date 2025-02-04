import { useState } from 'react'
import './App.css'

// import components
import { Typography,Button,Avatar,buttonClasses,TextField,Stack } from '@mui/material' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Stack spacing= {20} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
    <Button variant= "contained" sx= {{backgroundColor: "red",width:"50%",p:"0px"  }}>Hello  </Button>
    <Button variant= "contained" sx= {{backgroundColor: "green",width:"50%",p:"0px"  }}>Hello  </Button>
    <Button variant= "contained" sx= {{backgroundColor: "blue",width:"50%",p:"0px"  }}>Hello  </Button>
    </Stack>
    {/* <Button variant= "contained" sx= {{backgroundColor: "red", width:"100%", aspectRatio: 1/1,  }}>Hello  </Button> */}



    {/* <Typography >Hello World</Typography>
    <Typography variant="h2">Hello World</Typography>
    <Typography variant="h1">Hello World</Typography>
    <Typography subtitle2= 'h2'>Hello World</Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium voluptatem, eligendi quidem sit ipsum hic? Obcaecati vitae voluptate quis sunt vel culpa praesentium sint, ullam delectus totam aut non.</Typography>
    <Typography variant="h1"> How are you? </Typography> */}

    {/* <Button variant="text">Hello World</Button>
    <Button variant="outlined">Click me</Button>
    <Avatar alt="Remy Sharp" src="src\assets\react.svg" sx={{ width: 100, height: 100 }}
     />
    <Avatar  sx={{ bgcolor: blue[500] }} >Man dem </Avatar> */}
    {/* <Avatar sx={{ bgcolor: orange[500] }}>N</Avatar>
    <Avatar sx={{ bgcolor: purple[500] }}>OP</Avatar>
    <TextField variant= "filled" label="Name" id="text-field-filled"> </TextField> */}
    </>
    
  )
}

export default App







