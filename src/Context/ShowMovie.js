import { createContext, useState } from "react";

const ShowMovieContext = createContext();

export function ShowMovie({ children }) {

  const [movie, setMovie] = useState([]);

  const showMovie = (item) => {
    setMovie(item);
  };

  const values = {
    showMovie,
    movie
  };

  return (
    <ShowMovieContext.Provider value={values}>
      {children}
    </ShowMovieContext.Provider>
  );
}

export default ShowMovieContext;
