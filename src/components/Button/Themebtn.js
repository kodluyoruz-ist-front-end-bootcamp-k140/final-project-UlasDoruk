import React, { useContext } from 'react'
import "../Button/Themebtn.css"
import ThemeContext from '../Theme/Theme';

function Themebtn() {

    const {theme,setTheme} = useContext(ThemeContext)

  return (
    <button
      className="btn btn-secondary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
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
  );
}

export default Themebtn