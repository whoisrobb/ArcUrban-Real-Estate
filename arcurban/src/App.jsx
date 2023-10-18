import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Listings from './pages/Listings'
import PropertyListing from './pages/PropertyListing'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Landing />} />
          <Route path='listings' element={<Listings />} />
          <Route path='listings/property/:id' element={<PropertyListing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
