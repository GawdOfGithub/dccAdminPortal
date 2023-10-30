import  { createContext } from 'react';
import { useState } from 'react';

const MainContext = createContext();


export default function MainContextProvider({ children }) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [theme , setTheme ] = useState(true);
    

  return (
    <MainContext.Provider value={{
        toggleSidebar,setToggleSidebar,theme,setTheme
    
    }}>
      {children}
    </MainContext.Provider>
  );
}

export {MainContext}