import React from "react";
import Avengers from "./Avengers";
import "./Comics.scss";
import Content from "./Content";

export default function Comics() {
  return (
    <div className="Comicses">
      <Avengers />
      <Content />
    </div>
  );
}
