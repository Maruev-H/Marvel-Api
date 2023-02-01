import React from "react";
import "./Comics.scss";
import { Link } from "react-router-dom";

export default function ComicsCard({ item }) {
  return (
    <Link to={`/comics/${item.id}`}>
      <div className="Comics__card" key={item.id}>
        <div className="Comics__image">
          <img
            src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
            alt={item.name}
          />
        </div>
        <p>{item.title}</p>
        <span>{item.prices[0].price}$</span>
      </div>
    </Link>
  );
}
