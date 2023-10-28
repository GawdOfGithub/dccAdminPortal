import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Register() {
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
      <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-" >
        <div className="mb-4">
          <label className="flex justify-center mb-4 text-black text-2xl font-extrabold">
            Sign Up 🚀
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="username"
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="password"
            type={visibility ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="button" className='flex justify-center items-center ml-28 mt-3 hover:bg-black' onClick={()=>setVisibility(!visibility)}>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:text-red-500 z-40">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
