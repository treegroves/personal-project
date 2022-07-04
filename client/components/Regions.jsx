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
        <ul>
          {regions?.map(region => (
            <li key={region.id}>
              <Link to={`/region/${region.region_name}`}>{region.region_name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Regions