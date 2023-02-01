import React from "react";
import "./Wrapper.scss";
import Card from "./Card";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tanos from "../pictures/bg_asset.png";

export default function Wrapper() {
  const characters = useSelector((state) => state.characters);
  const person = useSelector((state) => state.person)[0];
  const [cards, setCards] = useState(9);

  function moreCards() {
    setCards(cards + 3);
  }

  return (
    <>
      <div className="Tooler">
        <div className="Wrapper">
          <div className="Wrapper__content">
            {characters.slice(0, cards).map((item) => (
              <Card item={item} />
            ))}
          </div>
          <Button
            text="LOAD MORE"
            className="button red"
            onClick={moreCards}
            disabled={cards === 99}
          />
        </div>
        {Object.keys(person).length > 0 ? (
          <div key={person.id} className="head">
            <div className="Tooler__pers">
              <div>
                <img
                  className="Tooler__img"
                  src={`${person.thumbnail?.path}.${person.thumbnail?.extension}`}
                  alt="png"
                />
              </div>
              <div>
                <h1>
                  {person.name.length > 20
                    ? `${person.name.substring(0, 20)}...`
                    : person.name}
                </h1>
                <div>
                  <Link to={`/character/${person.id}`}>
                    <Button text="home page" className="button red" />
                  </Link>
                </div>
                <a href={person.urls[1].url}>
                  <Button text="wiki" className="button gray" />
                </a>
              </div>
            </div>
            <p>{person.description}</p>
          </div>
        ) : (
          <div className="Skeleton">
            <h1>Please select a character to see information</h1>
            <div className="Skeleton__ava">
              <div className="Skeleton__circle"></div>
              <div className="Skeleton__string"></div>
            </div>
            <div className="Skeleton__same"></div>
            <div className="Skeleton__same"></div>
            <div className="Skeleton__same"></div>
          </div>
        )}
        <img className="Tooler__tanos" src={Tanos} alt="tanos" />
      </div>
    </>
  );
}
