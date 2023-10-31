import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navVariants = {
    initial: {
        scaleY: 0,
    },
    open: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0]
        }
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
        }
    }
}

const LandingNav = () => {
    const navigation = ['listings', 'the-studio', 'contact']
    const [navOpen, setNavOpen] = useState(false)

  return (
    <div className='landing-nav'>
        <Link className='logo' to={'/'}>ArcUrban</Link>

        <button onClick={() => setNavOpen(prev => !prev)} className='menu'>
            menu
            {navOpen ? 
                <i className="uil uil-times"></i>
                :
                <i className="uil uil-bars"></i>
            }
        </button>
        <AnimatePresence>
            {navOpen &&
                <motion.nav
                    variants={navVariants}
                    initial='initial'
                    animate='open'
                    exit='exit'
                >
                    <div className="wrapper">
                        {navigation.map((nav, index) => (
                            <div key={index} className="link-item">
                                <Link to={`/${nav}`}>{nav}</Link>
                            </div>
                        ))}

                    </div>
                </motion.nav>
            }
        </AnimatePresence>
    </div>
  )
}

export default LandingNav