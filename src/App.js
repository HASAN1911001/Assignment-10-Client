import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Faq from './components/Stat'
import Blog from './components/Blog'
import Quiz from './components/Quiz'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import app from './Firebase/Firebase.init'
import LogIn from './components/LogIn/LogIn'
import Signup from './components/Signup'

import PrivateRoute from './components/route/PrivateRoute'
import Checkout from './components/Checkout'
// import Signup from './components/Signup/Signup'
// import Faq from './components/Faq'

const auth = getAuth(app)

//toast.configure()

function App() {

  const provider = new GoogleAuthProvider();

    const router = createBrowserRouter([
      {path: '/', element: <Home></Home>},
      {path: '/blog', element: <Blog></Blog>},
      {path: '/faq', element: <Faq></Faq>},
      {path: '/login', element: <LogIn></LogIn>},
      {path: '/checkout', element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>},
      {path: '/signup', element: <Signup></Signup>},
      {path: '/quiz/:id',
        loader: async ({params}) =>{
          return fetch(`https://b610-lerning-platform-server-side-hasan-1911001.vercel.app/courses/${params.id}`)
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