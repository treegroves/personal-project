import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { addLocation } from '../api'

function AddLocation({ setLocations, closeAddForm, setError }) {
  const locations = useSelector((state) => state.locations)
  const [newLocation, setNewLocation] = useState()
  //where to list all fields
  function handleAddChange(e) {
    //dispatch?
    const { name, value } = e.target
    setNewLocation({
      ...newLocation,
      [name]: value,
    })
  }

  function handleAdd() {
    const location = { ...newLocation }
    addLocation(location)
      .then(setLocations)
      .then(closeAddForm)
      .catch((err) => setError(err.message))
  }
}
