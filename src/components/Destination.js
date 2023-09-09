import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Destination.css";
import PlanetDesc from "./Planet_desc.js";

export default function Destination() {
  return (
    <div className="container_2">
      <div className="pick_container">
        <p>01 Pick Your Destination</p>
        <ul>
          <li>
            <NavLink to="/Destination/MOON" className={({isActive}) => isActive ? "current_link" : null}>MOON</NavLink>
          </li>
          <li>
            <NavLink to="/Destination/MARS" className={({isActive}) => isActive ? "current_link" : null}>MARS</NavLink>
          </li>
          <li>
            <NavLink to="/Destination/EUROPA" className={({isActive}) => isActive ? "current_link" : null}>EUROPA</NavLink>
          </li>
          <li>
            <NavLink to="/Destination/TITAN" className={({isActive}) => isActive ? "current_link" : null}>TITAN</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        {/* Route for PlanetDesc */}
        <Route path="/:planetName" element={<PlanetDesc />} />
      </Routes>
    </div>
  );
}
