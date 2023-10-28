import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContextProvider from './Contexts/MainContext.jsx'
import { AuthProvider } from './Contexts/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <MainContextProvider>
    <App />
    </MainContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)
