import useMainContext from "../Helpers/useMainContext";
import Sidebar from "./Sidebar";
import useAuth from "../Helpers/useAuthContext";

import { Link } from "react-router-dom";
const Navbar = () => {
  const{user,setUser} = useAuth()
    const{toggleSidebar,setToggleSidebar} = useMainContext()
  return (
    <>
    <Sidebar/>
    <div className="fixed w-full bg-black min-h-content text-white z-20">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl">
          <button className="bg-black text-white" onClick={()=>setToggleSidebar(!toggleSidebar)} >
           {!toggleSidebar? ( <span>☰</span>):<span>✕</span>}
          </button>
        </div>
        <Link to="/eventPage" className="text-white text-xl font-bold">
          <span>EventForm</span>
        </Link>
        <button className="bg-black text-white">
          <span>🔍</span>
        </button>
        <div className='flex'>
          <span>👤</span>
          
          {
            !user?
            (<>
          <Link to="/signIn" className="bg-black text-white font-semibold">
            <span>SignIn</span>
          </Link>
          </>):<>
          
           
            <button className="bg-black text-white font-semibold" onClick={()=>setUser(null)}>
            <span>Logut</span>
          </button>
           
          
          </>}
        </div>
      </div>
    </div>;
    </>)
    
};
export default Navbar