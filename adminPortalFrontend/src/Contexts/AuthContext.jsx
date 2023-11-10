// AuthContext.js
import { createContext, useState } from 'react';
import { useEffect } from 'react';
const AuthContext = createContext();
import useFetch from '../Helpers/useFetceher';


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [navigateToDisplay, setnavigateToDisplay] = useState(false);
  
  useEffect(() => {
    const storedValue = localStorage.getItem('myValue');
    if (storedValue) {
      setUser(storedValue);
    }
  }, []);
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
        console.error('Registration Error:', error);
        return;
      }

      const { userId, token } = data;
  

      console.log('Registration Successful:', userId, token);
      localStorage.setItem('myValue', token);
      setUser(token)
      alert("You have successfully logged in as an admin")
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
         localStorage.setItem('myValue', token);

      console.log('Login Successful:', userId, token);
    } catch (error) {
     
      console.error('Fetch Error:', error);
    }
  };
  const handleEventAdding = async ({ event }) => {
    try {
      console.log(event);
      const url = 'https://api-admin-dcc.onrender.com/events/add';
      const token = user; 
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token, 
        },
        
        body: JSON.stringify(event), 
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      console.log('Response from server:', data);
  
      if (!response.ok) {
        alert("image upload failed click on the add event button once again ");
        return;
      }
  
      alert("success")
      setnavigateToDisplay(true)
    } catch (error) {
    
      console.error('Fetch Error:', error);
    }
  };

  const deletingEvent = async (id) => { 
    try {

      const url = `https://api-admin-dcc.onrender.com/events/${id}`; 
      const token = user; 
  
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        }
    
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      console.log('Response from server:', data);
  
      if (!response.ok) {
        console.error('Failed to delete the event');
        return;
      }
  
      console.log('Successfully deleted the data from the backend:', data);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };
  const logout = () => {
    localStorage.removeItem('myValue'); 
    setUser(''); 
  };
  
  return (
    <AuthContext.Provider value={{ user, setUser, handleRegistration,handleLogin,handleEventAdding,deletingEvent,logout,navigateToDisplay,setnavigateToDisplay }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
