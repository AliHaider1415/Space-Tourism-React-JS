import React from 'react'
import './TechPage.css'
import TechDesc from './TechDesc'
import { Routes, Route, NavLink } from 'react-router-dom'
export default function TechPage() {
  return (
    <div className='Tech_container'>
      <p><strong>03 </strong> SPACE TECHNOLOGY</p>
      <div className="elem3_container">
        <div className="li_container">
            <button><NavLink to = "/TechPage/one" className={({isActive}) => isActive ? "current_tech" : null}>1</NavLink></button>
            <button><NavLink to = "/TechPage/two" className={({isActive}) => isActive ? "current_tech" : null}>2</NavLink></button>
            <button><NavLink to = "/TechPage/three" className={({isActive}) => isActive ? "current_tech" : null}>3</NavLink></button>
        </div>
        <Routes>
        {/* Route for CrewDesc */}
        <Route path="/:Tech_id" element={<TechDesc />} />
      </Routes>
        
      </div>
        
    </div>
  )
}
