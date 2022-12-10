import ThemeContext from "./ThemeContext";
import {useState} from 'react';


const ThemeContextProvider:React.FC <{ children: React.ReactNode }>=(props) => {

   const [theme,setTheme]=useState('light-theme');
   const themeHandler = ()=>{
     theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
   }

   const currentValue={
    theme,
    themeHandler
   }
     
    return (<ThemeContext.Provider value={currentValue}>
        {props.children}
 </ThemeContext.Provider>);
}


export default ThemeContextProvider;