// AuthContext.js
import React, { createContext, useState } from 'react';
const AuthContext = createContext();
import useFetch from '../Helpers/useFetceher';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const  fetchData  = useFetch();
  const handleRegistration = async (username,password,email) => {
    const url = 'https://api-admin-dcc.onrender.com/user/signup';
    const options = {
      method: 'POST',
      body: { username, password, email },
    };

    try {
      const { data, error } = await fetchData(url, options);
      

      if (error) {
        // Handle error (show message, etc.)
        console.error('Registration Error:', error);
        return;
      }

      // Data contains the response from the server
      const { userId, token } = data;
  

      console.log('Registration Successful:', userId, token);
      setUser(token)
      alert(user)
    } catch (error) {
      // Handle fetch error
      console.error('Fetch Error:', error);
    }
  };
  const handleLogin = async (email,password) => {
    const url = 'https://api-admin-dcc.onrender.com/user/login';
    const options = {
      method: 'POST',
      body: { email,password },
    
    };

    try {
      const { data, error } = await fetchData(url, options);
      console.log(data);

      if (error) {
        console.error('Login Failed', error);
        return;
      }

      const { userId, token } = data;
         setUser(token) 
      alert(token)
      
      

      console.log('Login Successful:', userId, token);
    } catch (error) {
     
      console.error('Fetch Error:', error);
    }
  };
  const handleEventAdding = async ({ event }) => {
    try {
      const url = 'https://api-admin-dcc.onrender.com/events/add';
      const token = user; // Assuming user contains the token
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token, // Assuming token format is without 'Bearer'
        },
        body: JSON.stringify(event), // Ensure the event details are properly formatted
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      console.log('Response from server:', data);
  
      if (!response.ok) {
        console.error('Failed to add the event to the backend');
        return;
      }
  
      console.log('Successfully added the event to the backend:', data);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };
  
  



  return (
    <AuthContext.Provider value={{ user, setUser, handleRegistration,handleLogin,handleEventAdding }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };