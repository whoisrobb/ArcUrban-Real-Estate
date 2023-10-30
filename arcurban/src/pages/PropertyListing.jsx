import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { listings } from '../utils/data'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PropertyListing = () => {
  const { id } = useParams()

  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  const [checkInStatus, setCheckInStatus] = useState(false)
  const [checkOutStatus, setCheckOutStatus] = useState(false)

  useEffect(() => {
    setCheckInStatus(false)
  }, [checkInDate])

  useEffect(() => {
    setCheckOutStatus(false)
  }, [checkOutDate])

  const handleCheckIn = (date) => {
    setCheckInDate(date)
  }

  const handleCheckOut = (date) => {
    setCheckOutDate(date)
  }

  const formatDate = (date) => {
    if (!date) return ''
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString(undefined, options)
  }

  return (
    <section id='property-listing'>
      <div className="wrapper">
        <div className="intro">
          <div className="actions">
            <Link className="btn back-btn" to={'..'}><i className="uil uil-angle-left"></i></Link>
            <div className="action-btns">
              <button className="btn heart">
                <i className="uil uil-heart"></i>
              </button>
              <button className="btn share">
                <i className="uil uil-share"></i>
              </button>
              <button className="btn save">
                <i className="uil uil-bookmark"></i>
              </button>
            </div>
          </div>
          <div className="name">
            <h1>{listings[id].property_name}</h1>
          </div>
          <div className="info">
            <div className="review">
              <i className="uil uil-star"></i>
              <p>4.7</p>
              <p>(254 reviews)</p>
            </div>
            <div className="location">
              <i className="uil uil-map-marker"></i>
              <p>{listings[id].location.neighborhood}, {listings[id].location.city}</p>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={`../../cover-photo/cover-photo-${id}.jpg`} alt="" />
        </div>

        <div className="details-checkout">

          <div className="details">
            <div className="description">
              <h2>{listings[id].subheading}</h2>
              <p>{listings[id].description}</p><br/>
              <p>{listings[id].explanation}</p>
            </div>
            <div className="ammenities">
              <h2>ammenities</h2>
              <div className="list">
                <ul>
                  <li>
                    <i className="uil uil-estate"></i>
                    {listings[id].details.living_rooms} living rooms
                  </li>
                  <li>
                    <i className="uil uil-bed"></i>
                    {listings[id].details.bedrooms} bedrooms
                  </li>
                  <li>
                    <i className="uil uil-bath"></i>
                    {listings[id].details.baths} baths
                  </li>
                  <li>
                    <i className="uil uil-utensils"></i>
                    {listings[id].details.kitchen} kitchen
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="uil uil-wifi"></i>
                    wifi
                  </li>
                  <li>
                    <i className="uil uil-car"></i>
                    garage
                  </li>
                  <li>
                    <i className="uil uil-pizza-slice"></i>
                    breakfast
                  </li>
                  <li>
                    <i className="uil uil-hospital"></i>
                    hospital nearby
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="checkout">
            <div className="property-details">
              <div className="review">
                <i className="uil uil-star"></i>
                <p>4.7</p>
                <p>(254 reviews)</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline' }}><h2>{listings[id].price}</h2>/night</div>
            </div>
            <div className="checkin-details">
              <div className="item" onClick={() => setCheckInStatus(true)}>
                <button className="date checkin-date">
                  <i className="uil uil-calendar-alt"></i>
                </button>
                <div className="values">
                  <p>Check-in</p>
                  {checkInStatus ? 
                    <DatePicker selected={checkInDate} onChange={handleCheckIn} />
                    // <DatePicker selected={checkInDate} onChange={() => {handleCheckIn(); setCheckInStatus(false);}} />
                    :
                    checkInDate ?
                      <h3>{formatDate(checkInDate)}</h3>
                      :
                      <h3>Add a date</h3>
                  }
                </div>
              </div>
              <div className="item" onClick={() => setCheckOutStatus(true)}>
                <button className="date checkout-date">
                  <i className="uil uil-calendar-alt"></i>
                </button>
                <div className="values">
                  <p>Check-out</p>
                  {checkOutStatus ? 
                    <DatePicker selected={checkOutDate} onChange={handleCheckOut} />
                    // <DatePicker selected={checkOutDate} onChange={() => {handleCheckOut(); setCheckOutStatus(false);}} />
                    :
                    checkOutDate ?
                      <h3>{formatDate(checkOutDate)}</h3>
                      :
                      <h3>Add a date</h3>
                  }
                </div>
              </div>
              <div className="item">
                <button className="date checkout-date">
                  <i className="uil uil-user"></i>
                </button>
                <div className="values">
                  <p>Guests</p>
                  <h3>2 guests</h3>
                </div>
              </div>
            </div>
            <button className="reserve">reserve property</button>
            <div className="fees">
              <div className="value">
                <p>$110 x 10 nights</p>
                <h3>$144</h3>
              </div>
              <div className="value">
                <p>service fee</p>
                <h3>$84</h3>
              </div>
              <div className="total value">
                <p>Total</p>
                <h3>$144</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyListing