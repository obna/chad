//
import React from "react";
import { List, ListItem, Avatar, ListItemButton, Button, Typography } from "@mui/material";

function Home() {
  let msg = "hello ello lo";
  let name = "chad";
  let cities = ['chicago', 'aspen', 'denver', 'seattle' ]
  let countries = [1, 2, 3, 4]
  
  const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked')
    console.log(event.timeStamp)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClick} > {msg}</Button>
      
      {name ? (<Typography variant='h3'> Hello {name} </Typography>) : (<Typography variant="h1">{msg}</Typography>)}
      
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
      </List>

    </>
  );
}

export default Home;
