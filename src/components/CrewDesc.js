import React from "react";
import "./CrewDesc.css";
import anousheh_img from "./images/image-anousheh-ansari.webp";
import douglas_img from "./images/image-douglas-hurley.webp";
import mark_img from "./images/image-mark-shuttleworth.webp";
import victor_img from "./images/image-victor-glover.webp";
import { useParams } from "react-router-dom";
export default function CrewDesc() {
  const {CrewName} = useParams();
  
  const Crew_data = {
    anousheh: {
      prof: "Aerospace Engineer",
      name: "Anousheh Ansar",
      desc: "Anousheh Ansari is an Iranian American engineer and co-founder and chairwoman of Prodea Systems. Her previous business accomplishments include serving as co-founder and CEO of Telecom Technologies, Inc.",
      img: anousheh_img
    },
    douglas: {
      prof: "Marine Corps",
      name: "Douglas Hurley",
      desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He piloted Space Shuttle missions STS-127 and STS-135, the final flight of the Space Shuttle program.",
      img: douglas_img,
    },
    mark: {
      prof: "Mechanical Engineer",
      name: "Mark Shuttleworth",
      desc: "Mark Richard Shuttleworth is a South African and British entrepreneur who is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system. In 2002, Shuttleworth became the first South African to travel to space as a space tourist",
      img: mark_img,
    },
    victor: {
      prof: "Astronaut",
      name: "Victor Glover",
      desc: "Victor Jerome Glover is a NASA astronaut of the class of 2013 and Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a captain and F/A-18 pilot in the U.S. Navy and is a graduate of the U.S. Air Force Test Pilot School",
      img: victor_img,
    }
  };
  const crew_obj = Crew_data[CrewName];
  console.log(crew_obj);
  return (

      <div className="container_3">
        <div className="crew_desc">
          <br />
          <br />
          <p>{crew_obj.prof.toUpperCase()}</p>
          <h1>{crew_obj.name.toUpperCase()}</h1>
          <p>
            {crew_obj.desc}
          </p>
        </div>
        <img src={crew_obj.img} alt="Crew Image" />
      </div>
  );
}
