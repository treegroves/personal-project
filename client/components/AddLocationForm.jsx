import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createLocation } from '../actions'

function AddLocation() {
  const [newLocation, setNewLocation] = useState({
    name: '',
    description: '',
    address: '',
    opening_hours: '',
    website_url: '',
    wheelchair_compatible: '',
    ramps: '',
    elevator: '',
    accessible_toilets: '',
    region_id: '',
  })
  const dispatch = useDispatch()

  //where to list all fields

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log('handleSubmit')
    dispatch(createLocation(newLocation))
  }

  function handleChange(evt) {
    setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value })
  } //target.name refers to name in input function

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationName"
        >
          name
        </label>
        <input
          type="text"
          name="name"
          value={newLocation.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationDescription"
        >
          description
        </label>
        <input
          type="text"
          name="description"
          value={newLocation.description}
          onChange={handleChange}
        />
      </div>

      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationAddress"
        >
          address
        </label>
        <input
          type="text"
          name="address"
          value={newLocation.address}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationHours"
        >
          opening hours
        </label>
        <input
          type="text"
          name="openingHours"
          value={newLocation.opening_hours}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationUrl"
        >
          website
        </label>
        <input
          type="text"
          name="url"
          value={newLocation.website_url}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationWheelchair"
        >
          wheelchair compatibility
        </label>
        <input
          type="number"
          name="wheelchair access"
          value={newLocation.wheelchair_compatible}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationRamps"
        >
          ramps
        </label>
        <input
          type="number"
          name="ramps"
          value={newLocation.ramps}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationElevator"
        >
          elevator
        </label>
        <input
          type="number"
          name="elevator"
          value={newLocation.elevator}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationToilets"
        >
          toilets
        </label>
        <input
          type="number"
          name="accessible toilets"
          value={newLocation.accessible_toilets}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="locationRegionId"
        >
          region id
        </label>
        <input
          type="number"
          name="region id"
          value={newLocation.region_id}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddLocation
