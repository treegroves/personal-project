import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createLocation } from '../actions'

function AddLocation() {
  const [newLocation, setNewLocation] = useState({
    name: '',
    description: '',
    address: '',
    openingHours: '',
    websiteUrl: '',
    wheelchairCompatible: '',
    ramps: '',
    elevator: '',
    accessibleToilets: '',
    regionId: '',
  })
  const dispatch = useDispatch()

  //where to list all fields

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(createLocation(newLocation))
  }

  function handleChange(evt) {
    setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value })
  } //target.name refers to name in input function

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-4">
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
          value={newLocation.openingHours}
          onChange={handleChange}
        />
      </div>

      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="websiteUrl"
        >
          website
        </label>
        <input
          type="text"
          name="websiteUrl"
          value={newLocation.websiteUrl}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="wheelchairCompatible"
        >
          wheelchair compatibility
        </label>
        <input
          type="text"
          name="wheelchairCompatible"
          value={newLocation.wheelchairCompatible}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="ramps"
        >
          ramps
        </label>
        <input
          type="text"
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
          type="text"
          name="elevator"
          value={newLocation.elevator}
          onChange={handleChange}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <label
          className="input-group-text"
          id="inputGroup-sizing-sm"
          htmlFor="accessibleToilets"
        >
          toilets
        </label>
        <input
          type="text"
          name="accessibleToilets"
          value={newLocation.accessibleToilets}
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
          type="text"
          name="regionId"
          value={newLocation.regionId}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddLocation
