import React from 'react'
import { Typography } from '@mui/material'


import { db } from "../config/firebase.ts"
import { doc, getDoc } from "firebase/firestore"
import { useEffect } from 'react'

interface Principal{
  district: string;
  firstname: string;
  lastname: string;
  uid: number;
}

function Explore() {

  useEffect(() => {
    const fetchPrincipal = async () => {
      const docRef = doc(db, "principal", "jholmes")
      const docData = await getDoc(docRef);

      if (docData.exists()) {
        const principalData = docData.data() as Principal;
        console.log(principalData)
        return principalData;
      } else {
        console.log('No such document')
      }
      console.log(docRef)
    };
    fetchPrincipal();
  })
    
  return (
    <>
    
      <Typography variant="h1">principal</Typography>
    
    </>
  )
}

export default Explore