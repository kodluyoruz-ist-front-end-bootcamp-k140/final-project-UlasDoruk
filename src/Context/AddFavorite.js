import { createContext,useState } from "react";

const FavoriteContext = createContext()

export function AddFavorite ({children}){

    const [favorite,setFavorite] = useState([])
    const [movie,setMovie]=useState([])

    const showMovie = (item)=>{
        setMovie(item)
    }

    const addFavorite = (item,findfav)=>{
        if(!findfav){
            return setFavorite((favorite)=>[item,...favorite])
        }
        const filtered = favorite.filter((item)=>item.id !== findfav.id)
        setFavorite(filtered)
    }

    const truncateOverview = (string, maxLength) => {
      if (!string) return null;
      if (string.length <= maxLength) return string;
      return `${string.substring(0, maxLength)} ...`;
    };

     const values = { favorite, setFavorite, addFavorite,truncateOverview,showMovie,movie};

    return(
        <FavoriteContext.Provider value={values}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;