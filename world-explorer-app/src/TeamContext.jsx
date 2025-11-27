import { useState, createContext } from "react";
export const ThemeContext = createContext();
export function Themeprovider({children}){
  const [theme, settheme] = useState('light');
  function toggletheme(){
    settheme((prev)=>(
      !prev
    ))
  }
  const value = {theme, toggletheme};
  return
  <ThemeContext.Provider vlaue={value}>
    {children}
  </ThemeContext.Provider>
}