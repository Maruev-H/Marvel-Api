import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Avengers from "../Comics/Avengers";


export default function PersonPage() {

  const [person, setPerson] = useState({});

  const characters = useSelector((state) => state.characters);

  const { id } = useParams();

  function personHome() {
    setPerson(characters.filter((item) => item.id === +id)[0]);
  }

  useEffect(() => {
    personHome();
  }, []);
  
  return (
    <div>
      <Avengers />
      <div key={person.id}>
        <div className="Person">
          <div>
            <img
              className="Person__img"
              src={`${person.thumbnail?.path}.${person.thumbnail?.extension}`}
              alt="png"
            />
          </div>
          <div>
            <h1>{person.name}</h1>
            <p>{person.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
