import React, { useState } from 'react'

function AddLocation(props) {
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
  //where to list all fields

  function handleSubmit(evt) {
    evt.preventDefault()
    props.setLocations([
      ...props.locations,
      {
        ...newLocation,
      },
    ])
  }

  function handleChange(evt) {
    setNewLocation(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="locationName">name</label>
      <input
        type="text"
        name="name"
        value={newLocation.name}
        onChange={handleChange}
      />
      <label htmlFor="locationDescription">description</label>
      <input
        type="text"
        name="description"
        value={newLocation.description}
        onChange={handleChange}
      />
      <label htmlFor="locationAddress">address</label>
      <input
        type="text"
        name="address"
        value={newLocation.address}
        onChange={handleChange}
      />
      <label htmlFor="locationHours">opening hours</label>
      <input
        type="text"
        name="openingHours"
        value={newLocation.opening_hours}
        onChange={handleChange}
      />
      <label htmlFor="locationUrl">website</label>
      <input
        type="text"
        name="url"
        value={newLocation.website_url}
        onChange={handleChange}
      />
      <label htmlFor="locationWheelchair">wheelchair compatibility</label>
      <input
        type="number"
        name="wheelchair access"
        value={newLocation.wheelchair_compatible}
        onChange={handleChange}
      />
      <label htmlFor="locationRamps">ramps</label>
      <input
        type="number"
        name="ramps"
        value={newLocation.ramps}
        onChange={handleChange}
      />
      <label htmlFor="locationElevator">elevator</label>
      <input
        type="number"
        name="elevator"
        value={newLocation.elevator}
        onChange={handleChange}
      />
      <label htmlFor="locationToilets">toilets</label>
      <input
        type="number"
        name="accessible toilets"
        value={newLocation.accessible_toilets}
        onChange={handleChange}
      />
      <label htmlFor="locationRegionId">region id</label>
      <input
        type="number"
        name="region id"
        value={newLocation.region_id}
        onChange={handleChange}
      />
    </form>
  )
}

export default AddLocation
