import "./Favorite.css"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoriteContext from "../../Context/AddFavorite";
import Deletebtn from "../Button/DeleteFavbtn";

function Favorite() {
  const { favorite } = useContext(FavoriteContext);
  const{truncateOverview,removefav} = useContext(FavoriteContext)

  return (
    <div className="container">
      <div>
        {favorite.length < 1 && (
          <h1 className="empty">Favorite page is empty !!</h1>
        )}
        <div className="row">
          {favorite.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card data-set">
                  <NavLink to={"/movie/" + item.id}>
                    <img
                      className="card-img-top fav"
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                      alt="Card image cap"
                    ></img>
                  </NavLink>
                  <div className="card-body fav">
                    <strong>
                      <h4 className="card-title">
                        {truncateOverview(item.original_title, 15)}
                      </h4>
                    </strong>
                    <p className="card-text">
                      {truncateOverview(item.overview, 150)}
                    </p>
                    <div
                      className="card-footer"
                      onClick={() => removefav(item.id)}
                    >
                      <Deletebtn />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
