import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from './Components/Home/Home'
import ErrorPage from './Components/ErroePage/ErrorPage'
import AllMeal from './Components/AllMeal/AllMeal'
const route = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <AllMeal></AllMeal>,
        loader:()=> fetch('www.themealdb.com/api/json/v1/1/categories.php'),
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
