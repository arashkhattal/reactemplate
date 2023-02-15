import { Card, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useGlobalContext } from "../../context/globalContext";

const About = () => {
    const { loading, setLoading, alert, setAlert } = useGlobalContext();
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
        <Card className="main_content"    >
        <Typography variant="h2">About Page</Typography>
      </Card>
    </>
  );
}

export default About