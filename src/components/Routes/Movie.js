import React,{useContext} from 'react'
import ShowMovieContext from '../../Context/ShowMovie'
import "./Movie.css"
import Favbtn from "../Button/Favbtn"
import FavoriteContext from '../../Context/AddFavorite'
import DeleteFavbtn from "../Button/DeleteFavbtn"

function Movie() {

  const {favorite} = useContext(FavoriteContext)
  const {movie} = useContext(ShowMovieContext)
  const {addFavorite} = useContext(FavoriteContext)

  const findfav = favorite.find((item)=>item.id === movie.id)

  return (
    <div className="container">
      <div class="card showmovie">
        <img
          className="card showimg"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        ></img>
        <div class="card-body showmovie">
          <strong>
            <h1 class="card-title">{movie.title}</h1>
          </strong>
          <h3 class="card footer">
            {movie.overview}
            <p className="btn btn-primary releasedate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                class="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              {movie.release_date}
            </p>
            <p className="btn btn-primary votecount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              {movie.vote_count}
            </p>
            <p
              className={`btn btn-${
                movie.vote_average > 7 ? "success" : "danger"
              } voteaverage`}
            >
              {movie.vote_average}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="gold"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </p>
          </h3>

          <div className="favbtn" onClick={() => addFavorite(movie, findfav)}>
            {findfav ? <DeleteFavbtn /> : <Favbtn />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie