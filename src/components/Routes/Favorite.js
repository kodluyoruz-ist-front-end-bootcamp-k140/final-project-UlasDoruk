import "./Favorite.css"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoriteContext from "../../Context/AddFavorite";
import Deletebtn from "../Button/DeleteFavbtn";

function Favorite() {
  const { favorite } = useContext(FavoriteContext);
  const{truncateOverview} = useContext(FavoriteContext)

  return (
    <div className="container">
      <div className="row">
        {favorite.map((item, index) => {
          return (
            <div className="card data-set" key={index} style={{width:"20rem"}}>
              <NavLink to={"/movie/" + item.id}>
                <img
                  className="card-img-top fav"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  alt="Card image cap"
                ></img>
              </NavLink>
              <div className="card-body">
                <strong>
                  <h4 className="card-title">
                    {truncateOverview(item.original_title, 15)}
                  </h4>
                </strong>
                <p className="card-text">
                  {truncateOverview(item.overview, 150)}
                </p>
                <div className="container">
                  <p className="card-text_2" style={{ color: "red" }}>
                    Popularity : {Math.ceil(item.popularity)}
                    <br />
                    Vote Avg. : {item.vote_average}
                    <br />
                    Vote Count : {item.vote_count}
                  </p>
                </div>
                <div className="card-footer">
                  <Deletebtn/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;
