import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './components/AddCoffe.jsx'
import UodateCoffe from './components/UodateCoffe.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    loader:()=> fetch('http://localhost:5003/coffee')
  },
  {
    path:"/addCoffee",
   element:<AddCoffe></AddCoffe>

  },
  {
    path:"/updateCoffee/:id",
    element:<UodateCoffe></UodateCoffe>,
    loader:({params})=>fetch(`http://localhost:5003/coffee/${params.id}`)

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
