
import React from 'react';

const ThemeContext= React.createContext<{theme:string, themeHandler:()=>void }>
({
    theme:'',
    themeHandler:()=>{}
})

 
export default ThemeContext;