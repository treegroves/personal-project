import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRegions, fetchLocations } from '../actions'
//#
import Regions from './Regions'

function Locations () {
  const locations = useSelector(state => state.locations)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLocations())
  }, [])



  // if region_id (locations table) matches id (regions table) display
  //useParams
    // const params = useParams()
    // const id = fetchLocations

    // const location = locations.find((location) => {
    //   return location.id === Regions.id
    // }) 
    // if(location == null) {
    //   return <h2>Not Found</h2>
    // }
  return (
    <>
      <div className="locations-container">
       <h1>Hello</h1>
       <ul>
          {locations?.map(location => (
            <li key={location.id}>
              {location.name}
              <p>{location.description}</p>
              <p>{location.address}</p>
              <p>{location.opening_hours}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Locations