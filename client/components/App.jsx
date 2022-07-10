import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'

import Regions from './Regions'
import Locations from './Locations'
import AddLocationForm from './AddLocationForm'
function App() {
  return (
    <>
      <header className="header">
        <h1>Accessible Auckland</h1>
      </header>
      <div className="main">
        {/* <Regions /> */}
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route path="region/:region_name/:id" element={<Locations />} />
          <Route path="/addlocation" element={<AddLocationForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
