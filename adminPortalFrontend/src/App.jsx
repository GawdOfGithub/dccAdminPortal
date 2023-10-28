import React from 'react'
import AppLayout from './AppLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/Login'
import Register from './Pages/Register'
import ErrorPage from './Pages/ErrorPage'
 const App = () => {
  const router = createBrowserRouter([
    {
       element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>, 
        },
       
              {
              path:'/signIn',
              element:<LogIn/>
              },
      
          
                {
                  path:'/Register',
                  element:<Register/>
                  }
                  
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App