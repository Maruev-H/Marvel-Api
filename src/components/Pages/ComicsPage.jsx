import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Avengers from "../Comics/Avengers";
import "./ComicsPage.scss";
import { Link } from "react-router-dom";

export default function ComicsPage() {
  const [comPage, setComPage] = useState({});

  const comics = useSelector((state) => state.comics);

  const { id } = useParams();
  console.log(comics)
  function comicsHome() {
    setComPage(comics.filter((item) => item.id === +id)[0]);
    console.log(comPage);
  }

  useEffect(() => {
    comicsHome();
  }, []);

  return (
    <div>
      <Avengers />
      {comPage.title ? (
        <div className="comPage" key={comPage.id}>
          <div>
            <img
              className="comPage__img"
              src={`${comPage.thumbnail?.path}.${comPage.thumbnail?.extension}`}
              alt="png"
            />
          </div>
          <div>
            <h1>{comPage.title}</h1>
            <p>{comPage.description}</p>
            <p>{comPage.pageCount} pages</p>
            <p>Language: en-us</p>
            <span>{comPage.prices[0].price} $</span>
          </div>
          <div className="back">
            <Link to="/comics">
              <h2>Back to all</h2>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
