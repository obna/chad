//
import React from "react";
import { useState } from 'react';
import { List, ListItem, Avatar, ListItemButton, Button, Typography } from "@mui/material";

function Home() {
  let msg = "click me";
  let name = "chad";
  let cities = ['chicago', 'aspen', 'denver', 'seattle'];
  let [counter,  setCounter] = useState(0);
  
  const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
    console.log('was clicked')
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClick} > {msg}</Button>
      {/* <Typography variant='h3'> Counter {counter} </Typography> */}
      {counter > 3 ? <Typography> is {"\<"} 3: {counter} </Typography> : <Typography> is {">"} 3: {counter} </Typography> }
      {/* {name ? (<Typography variant='h3'> Hello {name} </Typography>) : (<Typography variant="h1">{msg}</Typography>)}
      
      <List>
        {cities.map((city) => (<ListItem key={city}> {city} </ListItem>))}
      </List>

      <List>
        {countries.map((count) => (
          <>
          <ListItemButton key={count}> {count} </ListItemButton>
          </>
        ))}
        {cities.map((city) => (<ListItemButton><Typography variant="subtitle1">{city}</Typography></ListItemButton>)) }
      </List> */}

    </>
  );
}

export default Home;
