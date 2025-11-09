import React from 'react'
import { useEffect } from 'react';
import Movies from '../Movies/Movies';
import Tvshow from '../Tvshow/Tvshow';
import People from '../People/People';

export default function Home() {
    useEffect(() => {
      document.title = "HOME";
    }, []);
  
  return (
    <>
      <Movies />
      <Tvshow />
      <People />
    </>
  )
}