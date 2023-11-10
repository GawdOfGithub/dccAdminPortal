import { createContext } from 'react';
import { useState } from 'react';

const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [theme, setTheme] = useState(false);
  const[isDisabled,setIsDisabled] = useState(false)

  const setConfirmation = () => {
    return new Promise((resolve, reject) => {
      try {
        setShowModal(true);
        resolve(); 
      } catch (error) {
        reject(error);
      }
    });
  };

  const setRejection = () => {
    return new Promise((resolve, reject) => {
      try {
        setShowModal(true);
        setConfirm(false);
        resolve(); 
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <MainContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        theme,
        setTheme,
        showModal,
        setShowModal,
        confirm,
        setConfirmation,
        setRejection,
        setConfirm,
        isDisabled,
        setIsDisabled
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };
