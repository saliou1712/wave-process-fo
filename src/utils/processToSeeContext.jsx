import { createContext, useState } from "react";

export const ProcessToSeeContext = createContext()

export const ProcessToSeeContextProvider = ({children}) => {
    const [processToSee, setProcessToSee] = useState()

    return (
        <ProcessToSeeContext.Provider value={{processToSee, setProcessToSee}}>
            {children}
        </ProcessToSeeContext.Provider>
    )
}