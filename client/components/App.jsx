import React, { useEffect }  from 'react'
import { Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'




import Regions from './Regions'
import Locations from './Locations'
function App () {
  return (
    <>
      <header className="header">
        <h1>Accessible Auckland</h1>
      </header>
      <div className="main">
        {/* <Regions /> */}
        <Routes>
          <Route path='/' element={<Regions/>} />
          <Route path='region/:region_name' element={<Locations/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
