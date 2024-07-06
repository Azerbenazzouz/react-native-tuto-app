import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appWrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getCurrentUser()
        .then((res)=>{
            if(res){
                setUser(res);
                setIsLoggedIn(true);
            }else{
                setIsLoading(false);
                setUser(null);
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