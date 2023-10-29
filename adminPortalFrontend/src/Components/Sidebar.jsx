import { Link } from "react-router-dom"
import useMainContext from "../Helpers/useMainContext"
const Sidebar = () => {
  const {toggleSidebar,setToggleSidebar} = useMainContext()
  
    return (
      <>   
      {toggleSidebar ? ( 
    
      <div className="fixed w-64 bg-black h-screen text-white z-10">
        <div className="px-4 py-6">
          <button className="border-b border-gray-500 text-white text-xl font-semibold py-2" onClick={()=>setToggleSidebar(false)}>
           
          </button>
          <Link
            to="/register"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            REGISTER AS AN ADMIN
          </Link>
          <Link
            to="/eventDisplay"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            DCC EVENTS
          </Link>
          <Link
            to="/eventPage"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
          DCC EVENT FORM
          </Link>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            DCC NITA WEBSITE
          </a>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            CP HUB
          </a>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            OTHER RESOURCES
          </a>
         
        </div>
      </div>
     ):(null)}
     </>)
     }
    
   export default Sidebar
      
  


    