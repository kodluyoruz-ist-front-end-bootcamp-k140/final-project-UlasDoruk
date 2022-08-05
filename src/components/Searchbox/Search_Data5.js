import React, { useContext,useEffect, useState } from "react";
import Favbtn from "../Button/Favbtn";
import FavoriteContext from "../../Context/AddFavorite";

function Searchbox({ placeholder, data }) {
  const [popularData, setPopularData] = useState([]);
  const [filter, setFilter] = useState("");
  const { truncateOverview } = useContext(FavoriteContext);

  const url =
    "https://api.themoviedb.org/4/list/8211825?page=5&api_key=fbc4b49dfdafc24534ba98c2a389e847&sort_by=vote_average.desc";

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
                    <img
                      className="card-img-top"
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                      alt="Card image cap"
                    ></img>
                    <div className="card-body">
                      <strong>
                        <h4 className="card-title">
                          {truncateOverview(item.original_title, 15)}
                        </h4>
                      </strong>
                      <p className="card-text">
                        {truncateOverview(item.overview, 150)}
                      </p>
                      <p className="card-text_2" style={{ color: "red" }}>
                        Popularity : {Math.ceil(item.popularity)}
                        <br />
                        Vote Avg. : {item.vote_average}
                        <br />
                        Vote Count : {item.vote_count}
                      </p>
                      <div className="card-footer">
                        <Favbtn />
                      </div>
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

export default Searchbox;
