import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import FavoriteContext from "../../Context/AddFavorite";
import "../Navbar/Navbar.css";

function Navbar() {

  const {favorite} = useContext(FavoriteContext)

  return (
    <div>
      <nav className="navbar  bg-dark">
        <NavLink
          className="navbar-brand"
          style={{ color: "white", margin: "10px" }}
          to="/"
        >
          MOVIEZZZ{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>
        </NavLink>
        <button className="btn btn-warning">
          <NavLink
            to={"/popular"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Popular
          </NavLink>
        </button>
        <button className="btn btn-success">
          <NavLink
            to={"/favorite"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Favorite
            <span className="span" style={{color:"silver"}}>{favorite.length}</span>
          </NavLink>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
