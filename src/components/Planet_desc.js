import React from 'react';
import { useParams } from 'react-router-dom';
import Europa_img from './images/image-europa.webp';
import Moon_img from './images/image-moon.webp';
import Mars_img from './images/image-mars.webp';
import Titan_img from './images/image-titan.webp';
import './Planet_Desc.css';

export default function Planet_desc() {
  const { planetName } = useParams();

  // Define content for each planet
  const planetInfo = {
    MOON: {
      img: Moon_img,
      description: "The Moon is Earth's only natural satellite. Its diameter is about one-quarter of Earth's, making it the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet",
      distance: "119 MIL.KM",
      time: "22 Years"
    },
    MARS: {
      img: Mars_img,
      description: "Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron III oxide dust in the soil, giving it the nickname",
      distance: "119 MIL.KM",
      time: "22 Years"
    },
    EUROPA: {
      img: Europa_img,
      description: "Europa, or Jupiter II, is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 95 known moons of Jupiter. It is also the sixth-largest moon in the Solar System.",
      distance: "119 MIL.KM",
      time: "22 Years"
    },
    TITAN: {
      img: Titan_img,
      description: "Titan is the largest moon of Saturn, the second-largest in the Solar System and larger than any of the dwarf planets of the Solar System.",
      distance: "119 MIL.KM",
      time: "22 Years"
    }
  };

  const planet_obj = planetInfo[planetName]; // Use square brackets to access the object
console.log(planet_obj);
  return (
    <div className='Planet_desc'>
      <img src={planet_obj.img} alt="Planet" />
      <div className="desc2_container">
        <br />
        <h1>{planetName.toLocaleUpperCase()}</h1>
        <p>{planet_obj.description}</p>
        <br />
        <hr />
        <div className="planet_info_container">
          <div className="distance">
            <p>AVG.DISTANCE</p>
            <h2>{planet_obj.distance}</h2>
          </div>
          <div className="time">
            <p>EST. TRAVEL TIME</p>
            <h2>{planet_obj.time}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
