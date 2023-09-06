import { useEffect, useState } from "react";
import { listings } from "../utils/data";


const Landing = () => {
    const [activeProperty, setActiveProperty] = useState(0);
    const homeData = listings

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveProperty((prevActive) => (prevActive + 1) % homeData.length);
        }, 10000);
    
        return () => clearInterval(interval);
      }, []);
  
    const handleNext = () => {
      setActiveProperty((prevActive) => (prevActive + 1) % homeData.length);
    };
  
    const handlePrev = () => {
      setActiveProperty((prevActive) =>
        prevActive === 0 ? homeData.length - 1 : prevActive - 1
      );
    };
  
    const btns = homeData.map((_, index) => (
      <button
        className={index === activeProperty ? 'index active' : 'index'}
        key={index}
        onClick={() => setActiveProperty(index)}
      />
    ));
  
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
            <div className="property-type">
              <p>{homeData[activeProperty].property_type}</p>
            </div>
            <div className="property-name">
              <h1>{homeData[activeProperty].property_name}</h1>
            </div>
            <button className="view">View Listing</button>
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