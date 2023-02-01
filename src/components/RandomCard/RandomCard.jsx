import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../Button/Button";
import "./RandomCard.scss";
import { Link } from "react-router-dom";
import hummer from "../pictures/image.png";

export default function RandomCard() {

  const characters = useSelector((state) => state.characters);

  const [randomCard, setRandomCard] = useState({});
  const fetchRandomCard = async () => {
    setRandomCard(characters[Math.floor(Math.random() * 99)]);
  };

  useEffect(() => {
    setRandomCard(characters[0] || {})
  }, [characters]);

  return (
    <div className="Random">
        <div className="Random__left">
         {!!Object.keys(randomCard).length  && 
         <div className="Random__content">
            <div className="Random__img">
              <img
                className="Random__img"
                src={`${randomCard.thumbnail?.path}.${randomCard.thumbnail?.extension}`}
                alt="png"
              />
            </div>
            <div className="Random__text">
              {randomCard.name.length > 10 ? (
                <h1>{`${randomCard.name.substring(0, 10)}...`}</h1>
              ) : (
                <h1>{randomCard.name}</h1>
              )}
              <p>{randomCard.description.length > 228 ? (`${randomCard.description.substring(0, 228)}...`) : (randomCard.description)}</p>
              <Link to={`/character/${randomCard.id}`}>
                <Button text="home page" className="button red" />
              </Link>
              <Button text="wiki" className="button gray" />
            </div>
          </div>}
        </div>
      <div className="Random__right">
        <h1>
          Random character for today!<br></br> Do you want to get to know him
          better?
          <br></br>
          <br></br>
          Or choose another one
        </h1>
        <Button
          text="try it"
          className="button red"
          onClick={fetchRandomCard}
        />
        <img className="Random__hummer" src={hummer} alt="hummer" />
      </div>
    </div>
  );
}
