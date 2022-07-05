import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRegions } from '../actions'

function Regions() {
  const regions = useSelector((state) => state.regions)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRegions())
  }, [])

  return (
    <div>
      <div className="regions-container row row-cols-2 ">
        {regions?.map((region) => (
          <div
            className="col-6 col-md-4"
            key={region.id}
            src={region.region_name}
          >
            <Link to={`/region/${region.region_name}/${region.id}`}>
              <img
                src="https://images.unsplash.com/photo-1656926207579-aae7089631c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="img-thumbnail"
                alt="..."
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Regions
