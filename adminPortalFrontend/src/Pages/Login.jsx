import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useAuth from '../Helpers/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function LogIn() {
  const[email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {handleLogin,user} = useAuth()
  const [visibility, setVisibility] = useState(false);
 const navigate = useNavigate()
  const handleSignIn =  async(e)=>
   {
    try{
    e.preventDefault()
    await handleLogin(email,password)
    console.log("Registration successful");
    alert(user)
    
    }
    catch(error)
    {
     console.log(error)
     console.log("Registration failed");
    }
   }
   useEffect(() => {
    alert(user); // This will alert whenever the 'user' state changes
  }, [user]);
  



  return (
    <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
      <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-">
        <div className="mb-4">
          <label className='flex justify-center mb-4 text-black text-2xl font-extrabold'>Let's GO 🚀<span></span></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="password"
            type={visibility ? "text" : "password"}
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="button" className='flex justify-center items-center ml-28 mt-3 hover:bg-black' onClick={()=>setVisibility(!visibility)}>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
        <div className="mb-4">
          <Link to="/resetPassword" className="text-blue-500 hover:underline">
            Forgot your password? Reset it here.
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick ={handleSignIn}
          >
            Log In
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:text-red-500 z-40">
            Register now
          </Link>
        </p>
      </div>
      <div className="text-center mt-5">
        
      </div>
    </div>
  );
}
