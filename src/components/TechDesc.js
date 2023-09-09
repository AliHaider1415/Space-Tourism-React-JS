import React from 'react'
import launch from './images/image-launch-vehicle-portrait.jpg'
import capsule from './images/image-space-capsule-portrait.jpg'
import spaceport from './images/image-spaceport-portrait.jpg'
import './TechDesc.css'
import { useParams } from 'react-router-dom'
export default function TechDesc() {
    const {Tech_id} = useParams();
  
  const Tech_data = {
    one: {
      name: "Launch Vehicle",
      desc: "Anousheh Ansari is an Iranian American engineer and co-founder and chairwoman of Prodea Systems. Her previous business accomplishments include serving as co-founder and CEO of Telecom Technologies, Inc.",
      img: launch
    },
    two: {
      name: "Space Capsule",
      desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He piloted Space Shuttle missions STS-127 and STS-135, the final flight of the Space Shuttle program.",
      img: capsule
    },
    three: {
      name: "Space Port",
      desc: "Mark Richard Shuttleworth is a South African and British entrepreneur who is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system. In 2002, Shuttleworth became the first South African to travel to space as a space tourist",
      img: spaceport
    }
  };
  const tech_obj = Tech_data[Tech_id];
  return (
    <>
    <div className='container_4'>
    <h3>THE TERMINOLOGY</h3>
    <h1>{tech_obj.name.toUpperCase()}</h1>
    <p>{tech_obj.desc}</p>
    </div>
    <img src={tech_obj.img} alt="Rocket" />
    </>
  )
}
