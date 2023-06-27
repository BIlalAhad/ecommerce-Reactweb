import { Children, createContext, useContext } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    return <AppContext.Provider value={{Name:'Bilal'}}>{children}</AppContext.Provider>
}
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext}