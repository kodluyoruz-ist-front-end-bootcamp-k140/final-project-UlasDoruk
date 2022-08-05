import React,{createContext,useState} from 'react'
import Themebtn from '../Button/Themebtn';

const ThemeContext = createContext()

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const values = { theme, setTheme };

  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <ThemeContext.Provider value={values}>
        <Themebtn />
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeContext