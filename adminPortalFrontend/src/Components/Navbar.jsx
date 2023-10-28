import useMainContext from "../Helpers/useMainContext";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const Navbar = () => {
    const {setToggleSidebar} = useMainContext()
  return (
    <>
    <Sidebar/>
    <div className="fixed w-full bg-black min-h-content text-white">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl">
          <button className="bg-black text-white" onClick={()=>setToggleSidebar(true)} >
            <span>☰</span>
          </button>
        </div>
        <Link to="/" className="text-yellow-500 text-2xl font-bold">
          <span>My Site</span>
        </Link>
        <button className="bg-black text-white">
          <span>🔍</span>
        </button>
        <div className='flex'>
          <span>👤</span>
          <Link to="/signIn" className="bg-black text-white font-semibold">
            <span>SignIn</span>
          </Link>
        </div>
      </div>
    </div>;
    </>)
    
};
export default Navbar