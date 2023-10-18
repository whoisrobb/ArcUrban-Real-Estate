import React from 'react'
import { useParams } from 'react-router-dom'
import { listings } from '../utils/data'

const PropertyListing = () => {
  const { id } = useParams()

  return (
    <section id='property-listing'>
      <div className="wrapper">
        <div className="intro">
          <div className="title">
            <h1>{listings[id].property_name}</h1>
          </div>
          <div className="description">
            <p>{listings[id].description}</p>
          </div>
        </div>

        <div className="image">
          <img src={`../../cover-photo/cover-photo-${id}.jpg`} alt="" />
        </div>

        <div className="subheading">
          <h1>{listings[id].subheading}</h1>
        </div>

        <div className="details">
          <div className="info">
            <h3>Get to know the details</h3>
            <p>{listings[id].explanation}</p>
          </div>
          <div className="ammenities">
            <ul>
              <li>
                <div className="key">furnishing status</div>
                <div className="value">{listings[id].details.furnishing_status}</div>
              </li>
              <li>
                <div className="key">bedrooms</div>
                <div className="value">{listings[id].details.bedrooms}</div>
              </li>
              <li>
                <div className="key">baths</div>
                <div className="value">{listings[id].details.baths}</div>
              </li>
              <li>
                <div className="key">livingrooms</div>
                <div className="value">{listings[id].details.living_rooms}</div>
              </li>
              <li>
                <div className="key">kitchen</div>
                <div className="value">{listings[id].details.kitchen}</div>
              </li>
              <li>
                <div className="key">size</div>
                <div className="value">{listings[id].details.area.metric}</div>
              </li>
              <li>
                <div className="key">status</div>
                <div className="value">{listings[id].status}</div>
              </li>
              <li>
                <div className="key">price</div>
                <div className="value">{listings[id].price}</div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PropertyListing