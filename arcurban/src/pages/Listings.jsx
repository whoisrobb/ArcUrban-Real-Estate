import React from 'react'
import { listings } from '../utils/data'
import { Link } from 'react-router-dom'

const Listings = () => {
    const properties = listings

  return (
    <section id='listings'>
        <div className="wrapper">
              <Link className="btn back-btn" to={'..'}><i className="uil uil-angle-left"></i></Link>
        <h1 className="header">Listings</h1>

            {properties.map((listing, index) => (
                <div key={index} className="item">
                    <div className="left">
                        {/* <p className='header'>property</p> */}
                        <p className="name">{listing.property_name}</p>
                        <Link to={`/listings/property/${listing.id}`}>
                            <img src={`/cover-photo/${listing.cover_photo}`} alt="" />
                        </Link>
                    </div>
                    <div className="right">
                        <div className="details">
                            
                            <div className="location">
                                <p className="key">location</p>
                                <p className="value">{listing.location.city}</p>
                            </div>

                            <div className="size">
                                <p className="key">size</p>
                                <p className="value">{listing.details.area.metric}</p>
                            </div>

                            <div className="sale-or-rental">
                                <p className="key">sale or rental</p>
                                <p className="value">{listing.sale_or_rental}</p>
                            </div>

                            <div className="type">
                                <p className="key">type</p>
                                <p className="value">{listing.property_type}</p>
                            </div>

                            <div className="year">
                                <p className="key">year</p>
                                <p className="value">{listing.year}</p>
                            </div>

                            <div className="status">
                                <p className="key">status</p>
                                <p className="value">{listing.status}</p>
                            </div>
                        </div>
                        <button className="view">
                            <Link to={`/listings/property/${listing.id}`}>view listing</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Listings