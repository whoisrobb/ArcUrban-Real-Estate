import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Listings from './pages/Listings'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/listings' element={<Listings />} />
      </Routes>
    </div>
  )
}

export default App
