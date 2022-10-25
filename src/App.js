import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Quiz from './components/Quiz'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//toast.configure()

function App() {
    const router = createBrowserRouter([
      {path: '/', element: <Home></Home>},
      {path: '/statistics', element: <Statistics></Statistics> },
      {path: '/blog', element: <Blog></Blog>},
      {path: '/quiz/:id',
        loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },

        // loader: async ({params.skillId}) => {
        //   // console.log(params);
        //   return fetch('https://openapi.programming-hero.com/api/quiz/${params.skillId}')
        // }
        element: <Quiz></Quiz>},
      {path: '*', element: <div>
        <h3 style={{textAlign:'center'}}>Rasta mapte vul korcho mama</h3>
        <h1 style={{textAlign:'center', color:'red'}}>This page does not exist!!!</h1>
      </div>}
  ])
  return (
    <div>

        <RouterProvider router={router}></RouterProvider>
    </div>
  );

}

export default App