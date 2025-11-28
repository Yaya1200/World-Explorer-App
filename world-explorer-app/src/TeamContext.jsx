import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); 


  function toggleTheme(e) {
   e.preventDefault(); 
    setTheme(prev =>
      {
        const newtheme = prev === "light" ? "dark" : "light";
        return newtheme
      
      });

  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
