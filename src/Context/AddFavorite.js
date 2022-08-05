import { createContext,useState } from "react";

const FavoriteContext = createContext()

export function AddFavorite ({children}){

    const [favorite,setFavorite] = useState([])

    const addFavorite = (item)=>{
        setFavorite((prev)=>[...prev,item])
    }

    const truncateOverview = (string, maxLength) => {
      if (!string) return null;
      if (string.length <= maxLength) return string;
      return `${string.substring(0, maxLength)} ...`;
    };

     const values = { favorite, setFavorite, addFavorite,truncateOverview};

    return(
        <FavoriteContext.Provider value={values}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;