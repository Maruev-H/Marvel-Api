import React from 'react'
import Avengers_ph from "../pictures/Avengers.png";
import Avengers_logo from "../pictures/Avengers-logo.png";
import "./Comics.scss";

export default function Avengers() {
  return (
    <div>
      <div className="Information">
      <div className="Avengers">
        <img src={Avengers_ph} alt="avengers" />
      </div>
      <h1>
        New comics every week! <br></br>Stay tuned!
      </h1>
      <div className="Avengers-logo">
        <img src={Avengers_logo} alt="avengers-logo" />
      </div>
    </div>
    </div>
  )
}
