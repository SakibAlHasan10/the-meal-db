import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Body/Home/Home'
import AllMeall from './Components/Meall/AllMeall/AllMeall'
const route = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    Children:[
      {
        path:'/',
        element:<AllMeall></AllMeall>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
