import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navigation = ['listings', 'the-studio', 'contact']
  return (
    <div className='navbar'>
        <Link to={'/'}>ArcUrban</Link>

        <nav>
            {navigation.map((nav, index) => (
                <Link key={index} to={`/${nav}`}>{nav}</Link>
            ))}
        </nav>
    </div>
  )
}

export default Navbar