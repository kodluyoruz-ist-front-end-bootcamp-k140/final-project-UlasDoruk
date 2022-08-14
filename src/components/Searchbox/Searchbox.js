import React, {useContext, useEffect, useState } from 'react'
import "../Searchbox/Searchbox.css"
import FavoriteContext from '../../Context/AddFavorite'
import { NavLink } from 'react-router-dom'
import ShowMovieContext from '../../Context/ShowMovie'
import Footer from '../Footer/Footer'

function Searchbox({placeholder}) {
  const [popularData, setPopularData] = useState([]);
  const [filter, setFilter] = useState("");
  const { truncateOverview} =useContext(FavoriteContext);
  const {showMovie} = useContext(ShowMovieContext)

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=fbc4b49dfdafc24534ba98c2a389e847&language=en-US";

  useEffect(() => {
    loadPopular();
  }, []);

  const loadPopular = async () => {
    let response = await fetch(`${url}`);
    let popular = await response.json();
    setPopularData(popular.results);
  };

  return (
    <form className="form-inline">
      <input
        id="searchbox"
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      ></input>
      <div className="container">
        <div className="row">
          {popularData
            .filter((val) => {
              if (filter === "") {
                return val;
              } else if (
                val.original_title.toLowerCase().includes(filter.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="card data-set">
                    <NavLink to={`/movie/${item.id}`}>
                      <img
                        className="card-img-top"
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                        alt="Card image cap"
                        onClick={() => showMovie(item)}
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
                     <Footer item={item} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </form>
  );
}

export default Searchbox