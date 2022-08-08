import React,{useContext} from 'react'
import ShowMovieContext from '../../Context/ShowMovie'
import "./Movie.css"
import Favbtn from "../Button/Favbtn"
import FavoriteContext from '../../Context/AddFavorite'
import DeleteFavbtn from "../Button/DeleteFavbtn"
import Popup from "reactjs-popup";

function Movie() {

  const {favorite} = useContext(FavoriteContext)
  const {movie} = useContext(ShowMovieContext)
  const {addFavorite} = useContext(FavoriteContext)

  const findfav = favorite.find((item)=>item.id === movie.id)
  console.log(findfav)

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
          <h3 class="card footer">{movie.overview}</h3>
          <div className="favbtn" onClick={() => addFavorite(movie,findfav)}>
            {findfav ? <DeleteFavbtn/> : <Favbtn/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie