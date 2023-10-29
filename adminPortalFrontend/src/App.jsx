
import AppLayout from './AppLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/Login'
import Register from './Pages/Register'
import ErrorPage from './Pages/ErrorPage'
import EventPage from './Pages/EventPage'
import { EventDisplay } from './Pages/EventDisplay'

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
                  path:'/register',
                  element:<Register/>
                  },
                  {
                  path:'/eventPage',
                  element:<EventPage/>
                  },
                  {
                  path:'/eventDisplay',
                  element:<EventDisplay/>
                  },

                  
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App