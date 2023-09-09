import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './CrewPage.css'
import CrewDesc from './CrewDesc'

export default function CrewPage() {
  return (
    <div className='Crew_container'>
      
      <p><strong>02 </strong> MEET YOUR CREW</p>
      <Routes>
        {/* Route for CrewDesc */}
        <Route path="/:CrewName" element={<CrewDesc />} />
      </Routes>
        <div className="btn_container">
          <ul>
            <li><button className='crew_btn'><NavLink to = "/CrewPage/anousheh" className={({isActive}) => isActive ? "current_crew" : null}>1</NavLink></button></li>
            <li><button className='crew_btn'><NavLink to = "/CrewPage/douglas" className={({isActive}) => isActive ? "current_crew" : null}>2</NavLink></button></li>
            <li><button className='crew_btn'><NavLink to = "/CrewPage/mark" className={({isActive}) => isActive ? "current_crew" : null}>3</NavLink></button></li>
            <li><button className='crew_btn'><NavLink to = "/CrewPage/victor" className={({isActive}) => isActive ? "current_crew" : null}>4</NavLink></button></li>
          </ul>
        </div>
        
    </div>
  )
}
