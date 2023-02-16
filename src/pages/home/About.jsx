import {Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useGlobalContext } from "../../context/globalContext";

const About = () => {
    const { setLoading } = useGlobalContext();
   useEffect(() => {
     setTimeout(() => {
       setLoading(true);
     }, 500);
   }, []);

   setTimeout(() => {
     setLoading(false);
   }, 4000);
  return (
    <>
        <div>
        <Typography variant="h2">About Page</Typography>
      </div>
    </>
  );
}

export default About