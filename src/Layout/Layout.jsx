import React from 'react'
import Navbar from '../Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Shared/Footer/Footer'

function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout