import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AppBar from '../components/AppBar'

const PublicLayout = () => {
  return (
    <>
      <AppBar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default PublicLayout;
