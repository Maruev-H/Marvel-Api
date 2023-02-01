import React from "react";
import "./Heder.scss";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>
        <button>
          <span>Marvel </span>information portal
        </button>
        <div>
         <NavLink to='/'><button>Characters</button></NavLink> / <NavLink to='/comics'><button>Comics</button></NavLink>
        </div>
      </nav>
    </div>
  );
}
