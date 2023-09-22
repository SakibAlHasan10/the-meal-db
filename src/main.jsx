import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import ReChart from './Components/ReChart/ReChart'
import ErrorPage from './Components/ErroePage/ErrorPage'
import AllMeal from './Components/AllMeal/AllMeal'
import SingleCategory from './Components/SingleCategory/SingleCategory'
// import SingleCategory from './Components/SingleCategory/SingleCategory'
// import AllMaleButton from './Components/AllMeal/AllMaleButton'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/rechart',
        element: <ReChart></ReChart>
      },
      {
        path: '/',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <AllMeal></AllMeal>,
      },
      {
        path: '/category/:category',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
        element: <SingleCategory></SingleCategory>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
