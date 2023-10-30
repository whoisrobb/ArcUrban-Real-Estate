import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const PageOutlet = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default PageOutlet