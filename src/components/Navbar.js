import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><NavLink to = "/" className={({isActive}) => isActive ? "current_link" : null}><strong>00 </strong> Home</NavLink></li>
            <li><NavLink to = "/Destination" className={({isActive}) => isActive ? "current_link" : null}><strong>01 </strong> Destination</NavLink></li>
            <li><NavLink to = "/CrewPage" className={({isActive}) => isActive ? "current_link" : null}><strong>02 </strong> Crew</NavLink></li>
            <li><NavLink to = "/TechPage" className={({isActive}) => isActive ? "current_link" : null}><strong>03 </strong> Technology</NavLink></li>
        </ul>
    </div>
  )
}
