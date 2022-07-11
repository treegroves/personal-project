import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchLocations } from '../actions'

function Locations() {
  const locations = useSelector((state) => state.locations)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLocations())
  }, [])

  const params = useParams()
  const regionId = params.id

  const locationArr = locations.filter((location) => {
    return location.regionId == regionId
  })
  return (
    <>
      <div className="locations-container">
        <ul>
          {locationArr?.map((location) => (
            <li key={location.id}>
              {location.name}
              <p>{location.description}</p>
              <p>{location.address}</p>
              <p>{location.openingHours}</p>
              <p>{location.websiteUrl}</p>
              <p>{location.wheelchairCompatible}</p>
              <p>{location.ramps}</p>
              <p>{location.elevator}</p>
              <p>{location.accessibleToilets}</p>
            </li>
          ))}
        </ul>
        <Link to={`/addlocation`}>
          <button>Add Location</button>
        </Link>
      </div>
    </>
  )
}

export default Locations
