import React from "react";
import { Link } from "react-router-dom";
import "./Heder.scss";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>
        <Link to='/'><button>
          <span>Marvel </span>information portal
        </button></Link>
        <div>
         <NavLink to='/'><button>Characters</button></NavLink> / <NavLink to='/comics'><button>Comics</button></NavLink>
        </div>
      </nav>
    </div>
  );
}
