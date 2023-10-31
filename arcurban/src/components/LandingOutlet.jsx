import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingNav from './LandingNav'

const LandingOutlet = () => {
  return (
    <div>
        <LandingNav />
        <Outlet />
    </div>
  )
}

export default LandingOutlet