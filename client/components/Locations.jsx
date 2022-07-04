import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchLocations } from '../actions'
//#


function Locations () {
  const locations = useSelector(state => state.locations)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLocations())
  }, [])

  //if location region_id(location table) === id(region table) return data

  const params = useParams()
  const regionId = params.id

  const locationArr = locations.filter((location) => {
    return location.region_id == regionId
  })
  // if(location == null) {
    
  //   return <h2>Not Found</h2>
  // }


    //render accessibility features 
    //if wheelchair_compatible === 1 return "Yes"
  return (
    <>
      <div className="locations-container">
       {/* <h1>{location?.name}</h1>
       <p>{location?.description}</p>
       <p>{location?.address}</p>
       <p>{location?.opening_hours}</p> */}

       <ul>
          {locationArr?.map(location => (
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