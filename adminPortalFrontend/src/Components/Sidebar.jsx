import useMainContext from "../Helpers/useMainContext"
const Sidebar = () => {
  const {toggleSidebar,setToggleSidebar} = useMainContext()
  
    return (
      <>
      {toggleSidebar ? ( 
    
      <div className="fixed w-64 bg-black h-screen text-white">
        <div className="px-4 py-6">
          <button className="border-b border-gray-500 text-white text-xl font-semibold py-2" onClick={()=>setToggleSidebar(false)}>
            <span>✕</span>
          </button>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            Item1
          </a>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            Item2
          </a>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            Item3
          </a>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            Item4
          </a>
          <a
            href="/"
            className="block border-b border-gray-500 text-white text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300"
          >
            Item5
          </a>
         
        </div>
      </div>
     ):(null)}
     </>)
     }
    
   export default Sidebar
      
  


    