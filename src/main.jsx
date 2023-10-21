import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './components/AddCoffe.jsx'
import UodateCoffe from './components/UodateCoffe.jsx'
import SignUp from './components/SignUp.jsx'
import Signin from './components/Signin.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import Users from './components/Users.jsx'
import Root from './components/root';

const router=createBrowserRouter([
  {path:'/',
  element:<Root></Root>,
 
    children:[
      {
        path:"/",
        element:<App></App>,
        loader:()=> fetch('http://localhost:5003/coffee'),
      },
      {
        path:"/addCoffee",
       element:<AddCoffe></AddCoffe>
    
      },
      {
        path:"/updateCoffee/:id",
        element:<UodateCoffe></UodateCoffe>,
        loader:({params})=>fetch(`http://localhost:5003/coffee/${params.id}`)
    
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/signin",
        element:<Signin></Signin>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5003/users')
      }
    ]

  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
