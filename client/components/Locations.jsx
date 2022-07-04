import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRegions} from '../actions'

function Regions () {
  const regions = useSelector(state => state.regions)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRegions())
  }, [])

  return (
    <>
      <div className="regions-container">
       <h1>Hello</h1>
      </div>
    </>
  )
}

export default Regions