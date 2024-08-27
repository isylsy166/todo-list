import { createContext, useState } from "react";

export const DarkmodeContext = createContext();

export function DarkmodeProvider({children}){

    const [darkmode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode((mode) => !mode)
    }

    return(
        <DarkmodeContext.Provider value={{darkmode, toggleMode}}>
            {children}
        </DarkmodeContext.Provider>
    )
}