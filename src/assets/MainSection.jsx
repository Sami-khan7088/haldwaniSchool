import React from 'react'
import { NavLink } from 'react-router-dom'
const MainSection = () => {
  return (
    <>
    <div className='MAincontainer'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                 <h1 className='intro-data'>Why THE SGTB School?</h1>
                <p>
                Shri Guru Teg Bahadur Platinum School Barapura has been established to 2022-23 impart spiritual values and excellence in both academic and non-academic disciplines, under eye and care of Shri Guru Teg Bahadur Educational society Barapura Pilibhit, consisting of Ten Members headed by The Manager S. Jaswinder Singh Grewal, President S. Rashpal Singh and Vice President S. Gurmeet Singh dedicated to see this plant of education budding, flowering and bearing valuable fruits.
                </p>
               
            </div>
            <div className="hero-section-image">
            <NavLink to="/products">
                    <button className='btnApply'>Apply Now</button>
                </NavLink>
            </div>
        </div>      
    </div>
    </>
  )
}

export default MainSection