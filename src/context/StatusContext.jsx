import { createContext, useState } from "react";

export const StatusContext = createContext();

export function StatusProvider({children}){

    const [conStatus, setConStatus] = useState('');
    const checkStatus = (s) => {
        setConStatus(s)
    }

    return(
        <StatusContext.Provider value={{conStatus, checkStatus}}>
            {children}
        </StatusContext.Provider>
    )
}
