import React from "react";
import "./Comics.scss";
import { useEffect,} from "react";
import { useDispatch, useSelector } from "react-redux";
import ComicsCard from "./ComicsCard";
import {Button} from '../Button/Button'
import { useState } from "react";
export default function Content() {
  const dispatch = useDispatch();

  const comics = useSelector((state)=> state.comics);
  const [comicsAmount, setComicsAmount] = useState(8);

  function moreComics (){
    setComicsAmount(comicsAmount + 4)
  }

  const fetchComics = async () => {
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=1c9cf65b61735976e916305bad81565d`
    );

    const resJS = await res.json();

    dispatch({
      type: "GET_COMICS",
      payload: {
        comics: resJS.data.results,
      },
    });
  };
  useEffect(() => {
    fetchComics();
  }, []);
  return (
    <div>
      <div className="Comics__container">
      {comics.slice(0, comicsAmount).map((item) => 
        <ComicsCard item={item}/>
      )}
      </div>
      <Button text="LOAD MORE" className="button red" onClick={moreComics} disabled={(comicsAmount === 100)}/>
    </div>
  )
}
