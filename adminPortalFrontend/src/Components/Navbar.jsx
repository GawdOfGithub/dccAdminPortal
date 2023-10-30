import useMainContext from "../Helpers/useMainContext";
import Sidebar from "./Sidebar";
import useAuth from "../Helpers/useAuthContext";
import { useState, useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from "react-router-dom";
import useWindowSize from "../Helpers/useWindow";
const Navbar = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width < 800; 
  const { user, setUser,logout } = useAuth();
  const { toggleSidebar, setToggleSidebar,theme,setTheme } = useMainContext();


  return (
    <>
      {isSmallScreen ? (
        <>
          <Sidebar />
          <div className="fixed w-full bg-black min-h-content text-white z-20">
            <div className="flex justify-between items-center px-4 py-2">
              <div className="text-2xl">
                <button
                  className="bg-black text-white"
                  onClick={() => setToggleSidebar(!toggleSidebar)}
                >
                  {!toggleSidebar ? <span>☰</span> : <span>✕</span>}
                </button>
              </div>
              <Link to="/eventPage" className="text-white text-xl font-bold">
                <span>EventForm</span>
              </Link>
              <button className="bg-black text-white">
                <span>
                  {/* <img src="dcc.svg" style={{ height: "30px", width: "30px" }} alt="logo" /> */}
                </span>
              </button>
              {!theme? 
                (<button onClick={()=>setTheme(!theme)}><LightModeIcon/></button>
                ) : (
                  <button onClick={()=>setTheme(!theme)}><DarkModeIcon/></button>
                )}
              <div className="flex">
                <span>👤</span>
               
                {!user ? (
                  <Link to="/signIn" className="bg-black text-white font-semibold">
                    <span>SignIn</span>
                  </Link>
                ) : (
                  <button className="bg-black text-white font-semibold" onClick={() => setUser(null)}>
                    <span>Logout</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>

<>
          
          <div className="fixed w-full bg-gray-900 min-h-content text-white z-0">
            <div className="flex justify-between items-center px-4 py-2">
              <div className="text-2xl">
                <button
                  className="bg-black text-white"
                  onClick={() => setToggleSidebar(!toggleSidebar)}
                >
                  
                </button>
              </div>
              <Link to="/register" className="text-white text-xl font-bold">
                <span>Register</span>
              </Link>
              <Link to="/eventPage" className="text-white text-xl font-bold">
                <span>EventForm</span>
              </Link>
              <Link to="/" className="text-white text-xl font-bold">
                <span>DCC NITA</span>
              </Link>
              <Link to="/" className="text-white text-xl font-bold">
                <span>21 DAYS CHALLENGE</span>
              </Link>
              <Link to="/" className="text-white text-xl font-bold">
                <span>CP HUB</span>
              </Link>
              <Link to="/" className="text-white text-xl font-bold">
                <span>CATCH THE FLAG</span>
              </Link>
            
              <button className="bg-black text-white">
                <span>
                  <img src="dcc.svg" style={{ height: "30px", width: "30px" }} alt="logo" />
                </span>
              </button>
              {!theme? 
                (<button onClick={()=>setTheme(!theme)}><LightModeIcon/></button>
                ) : (
                  <button onClick={()=>setTheme(!theme)}><DarkModeIcon/></button>
                )}
              <div className="flex">
                <span>👤</span>
                {!user ? (
                  <Link to="/signIn" className="bg-black text-white font-semibold">
                    <span>SignIn</span>
                  </Link>
                ) : (
                  <button className="bg-black text-white font-semibold" onClick={logout}>
                    <span>Logout</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
        
        </>
      )}
    </>
  );
};

export default Navbar;
