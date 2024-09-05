import React from 'react'
import { FaNewspaper } from "react-icons/fa";
const Latest = () => {
  return (
    <div className='MAincontainer3'>
      <div className='LatestNews'>
        <div className='LatestNewsIcon'>
          <button className='btnNews'>
            <div className='newsIcon'>
              <FaNewspaper style={{ fontSize: "20px" }} />
            </div>
            <div className='newsName'>
              Latest News
            </div>
          </button>
        </div>
        <div className='News'>
          <marquee>
            <h1>1. Summer Vacation till 1st July 2023.
              2. School will reopen on 3rd July (Monday).
              3. No any change in arrival and departure timings.</h1>
          </marquee>
        </div>
      </div>
    </div>
  )
}

export default Latest