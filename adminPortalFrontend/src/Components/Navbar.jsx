import useMainContext from "../Helpers/useMainContext";
import Sidebar from "./Sidebar";
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
        <a href="/" className="text-yellow-500 text-2xl font-bold">
          <span>My Site</span>
        </a>
        <button className="bg-black text-white">
          <span>🔍</span>
        </button>
        <div className='flex'>
          <span>👤</span>
          <a href="/signIn" className="bg-black text-white font-semibold">
            <span>SignIn</span>
          </a>
        </div>
      </div>
    </div>;
    </>)
    
};
export default Navbar