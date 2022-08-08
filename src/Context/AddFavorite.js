import { useEffect,createContext,useState } from "react";

const FavoriteContext = createContext()

const defaultfavorite = JSON.parse(localStorage.getItem("favmovie")) || []; 

export function AddFavorite ({children}){

    const [favorite,setFavorite] = useState(defaultfavorite)

    useEffect(()=>{
        localStorage.setItem("favmovie",JSON.stringify(favorite))
    },[favorite])
 
    const addFavorite = (item,findfav)=>{
        if(!findfav){
            return setFavorite((favorite)=>[item,...favorite])
        }
        const filtered = favorite.filter((item)=>item.id !== findfav.id)
        setFavorite(filtered)
    }

    const removefav = (x)=>{
        const remove = favorite.filter((item)=>item.id !== x)
        setFavorite(remove)
    }

    const truncateOverview = (string, maxLength) => {
      if (!string) return null;
      if (string.length <= maxLength) return string;
      return `${string.substring(0, maxLength)} ...`;
    };

     const values = { favorite, setFavorite, addFavorite,truncateOverview,removefav};

    return(
        <FavoriteContext.Provider value={values}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;