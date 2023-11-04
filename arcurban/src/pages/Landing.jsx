import { useEffect, useState } from "react"
import { listings } from "../utils/data"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'


const itemVarsP = {
  initial: {
      y: '7rem',
      opacity: '0',
      transition: {
          duration: 0.5
      }
  }, 
  open: {
      y: 0,
      opacity: '1',
      transition: {
          duration: 0.5,
      }
  },
  exit: {
      y: '7rem',
      opacity: '0',
      transition: {
          duration: 0.5
      }
  }
}

const itemVarsH = {
  initial: {
      y: '7rem',
      opacity: '0',
      transition: {
          duration: 0.5
      }
  }, 
  open: {
      y: 0,
      opacity: '1',
      transition: {
          duration: 0.5,
          delay: 0.3
      }
  },
  exit: {
      y: '7rem',
      opacity: '0',
      transition: {
          duration: 0.5
      }
  }
}

const Landing = () => {
    const [activeProperty, setActiveProperty] = useState(0);
    const homeData = listings

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveProperty((prevActive) => (prevActive + 1) % homeData.length);
        }, 10000)
    
        return () => clearInterval(interval);
      }, [])
  
    const handleNext = () => {
      setActiveProperty((prevActive) => (prevActive + 1) % homeData.length);
    }
  
    const handlePrev = () => {
      setActiveProperty((prevActive) =>
        prevActive === 0 ? homeData.length - 1 : prevActive - 1
      )
    }
  
    const btns = homeData.map((_, index) => (
      <button
        className={index === activeProperty ? 'index active' : 'index'}
        key={index}
        onClick={() => setActiveProperty(index)}
      />
    ))
  
    return (
      <section id="landing">
        <div
          className="bg-image"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(../cover-photo/cover-photo-${activeProperty}.jpg)`,
            // backgroundImage: `url(../cover-photo/cover-photo-${activeProperty}.jpg)`,
        }}
        />
        {activeProperty}
        <div className="wrapper">
          <div className="intro">
            <AnimatePresence>
            <div style={{ overflow: 'hidden' }} className="property-type">
              {<motion.p
                key={homeData[activeProperty].property_type}
                variants={itemVarsP}
                initial='initial'
                animate='open'
                exit='exit'
              >{homeData[activeProperty].property_type}</motion.p>}
            </div>
            <div style={{ overflow: 'hidden' }} className="property-name">
              <motion.h1
                key={homeData[activeProperty].property_name}
                variants={itemVarsH}
                initial='initial'
                animate='open'
                exit='exit'
              >{homeData[activeProperty].property_name}</motion.h1>
            </div>
            <button className="view">
              <Link to={`/listings/property/${homeData[activeProperty].id}`}>view listing</Link>
            </button>
          </AnimatePresence>
          </div>
        </div>
  
        <div className="sift">
          <button className="left" onClick={handlePrev}>
          <i className="uil uil-angle-left"></i>
            Prev Property
          </button>
          <div className="index-btns">{btns}</div>
          <button className="right" onClick={handleNext}>
            Next Property
            <i className="uil uil-angle-right"></i>
          </button>
        </div>
      </section>
    );
  };
  
export default Landing