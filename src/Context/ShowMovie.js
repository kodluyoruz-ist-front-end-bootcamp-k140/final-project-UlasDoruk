import { createContext, useState } from "react";

const ShowMovieContext = createContext();

export function ShowMovie({ children }) {
  const [movie, setMovie] = useState([]);

  const showMovie = (item) => {
    setMovie(item);
  };

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  const values = {
    truncateOverview,
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
