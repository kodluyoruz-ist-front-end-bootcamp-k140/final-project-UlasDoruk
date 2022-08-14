import React, { useContext } from 'react'
import "../Button/Themebtn.css"
import ThemeContext from '../Theme/Theme';
import toast, { Toaster } from "react-hot-toast";
import { FaJedi } from "react-icons/fa";
import { FaEmpire } from "react-icons/fa";

function Themebtn() {

    const {theme,setTheme} = useContext(ThemeContext)

     toast(theme === "light" ? "The Light Side" : "Welcome to Dark Side", {
      icon : (theme === "light" ? <FaJedi/> : <FaEmpire/> ),
       style: {
         borderRadius: "10px",
         background: "#333",
         color: "#fff",
       },
     });

  return (
    <div>
      <Toaster />
      <button
        className="btn btn-secondary"
        onClick={() => (toast, setTheme(theme === "light" ? "dark" : "light"))}>
        <svg
          className={`change ${theme === "light" ? "dark" : "white"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          class="bi bi-toggle-on"
          viewBox="0 0 16 16"
        >
          <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        </svg>
      </button>
    </div>
  );
}

export default Themebtn