import React,{useContext} from 'react'
import ShowMovieContext from '../../Context/ShowMovie'
import "./Movie.css"

function Movie() {

  const {movie} = useContext(ShowMovieContext)

  return (
    <div className="container">
      <div class="card showmovie">
        <img
          className="card showimg"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        ></img>
        <div class="card-body showmovie">
          <h1 class="card-title">{movie.title}</h1>
            <h3 class="footer">{movie.overview}</h3>
        </div>
      </div>
    </div>
  );
}

export default Movie