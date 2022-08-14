import { useContext } from "react";
import {  NavLink,useNavigate} from "react-router-dom";
import FavoriteContext from "../../Context/AddFavorite";
import "../Navbar/Navbar.css";
import {UseDocTitle} from "../Title/Title"
import {useSelector,useDispatch} from "react-redux"
import {sıgnout} from "../../Firebase/Firebase"
import {logout as logoutHandle} from "../../store/auth"

function Navbar() {

  const dispatch = useDispatch()
  const {user} = useSelector(state =>state.auth)
  const navigate = useNavigate()
  const [doctitle, setDocTitle] = UseDocTitle("MOVIEZZZ");
  const {favorite} = useContext(FavoriteContext)

  const handleLogout = async ()=>{
    await sıgnout()
    dispatch(logoutHandle())
    navigate = ("login",{
      replace : true
    })
  }

  return (
    <div>
      <nav className="navbar  bg-dark">
        <NavLink
          className="navbar-brand"
          style={{ color: "white", margin: "10px" }}
          to="/"
          onClick={() => setDocTitle("MOVIEZZZ")}
        >
          MOVIEZZZ
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
        {user ? <h2 className="btn btn-light user">{user.email}</h2> : ""}
        <NavLink to={"/Login"} style={{ color: "", textDecoration: "" }}>
          <button className="btn login" onClick={() => setDocTitle("Login")}>
            {user ? (
              <p style={{ color: "white" }} onClick={handleLogout}>
                LOGOUT
              </p>
            ) : (
              <p style={{ color: "white" }}>LOGIN</p>
            )}
          </button>
        </NavLink>
        <NavLink
          to={user ? "" : "/Signin"}
          style={{ color: "", textDecoration: "" }}
        >
          <button
            className={`btn ${user ? " signinop" : " signin"}`}
            onClick={() => setDocTitle("Sign in")}
          >
            <p style={{ color: "white" }}>REGISTER</p>
          </button>
        </NavLink>
        <NavLink to={"/popular"} style={{ color: "", textDecoration: "" }}>
          <button
            className="btn btn-warning showpop"
            onClick={() => setDocTitle("POPULAR MOVIES")}
          >
            <p style={{ color: "white" }}> POPULAR</p>
          </button>
        </NavLink>
        <NavLink
          to={user ? "/favorite" : ""}
          style={{ color: "", textDecoration: "" }}
        >
          <button
            className={`btn btn-success${user ? " showfav" : " opacity"}`}
            onClick={() => setDocTitle("FAVORITES")}
          >
            <p style={{ color: "white" }} className="showfav">
              FAVORITE
              <span className="span" style={{ color: "silver" }}>
                {user ? favorite.length : ""}
              </span>
            </p>
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
