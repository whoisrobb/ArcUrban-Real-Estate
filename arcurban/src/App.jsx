import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Listings from './pages/Listings'
import PropertyListing from './pages/PropertyListing'
import PageOutlet from './components/PageOutlet'
import LandingOutlet from './components/LandingOutlet'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route path='/' element={<LandingOutlet />} >
            <Route index element={<Landing />} />
          </Route>
          <Route path='listings' element={<PageOutlet />} >
            <Route index element={<Listings />} />
            <Route path='property/:id' element={<PropertyListing />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
