import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appWrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((res)=>{
            if(res){
                setIsLoggedIn(true);
                setUser(res);
            }else{
                setUser(null);
                setIsLoading(false);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }, [])
    
    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
            isLoading,
            setIsLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

export default GlobalProvider;