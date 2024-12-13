import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Proyectos from './Proyectos.jsx'
import Settings from './Settings.jsx'
import Stories from './Stories.jsx'
import Home from './Home.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ItemDetails from './ItemDetails.jsx'

const router=createBrowserRouter([{

path:'/',
element:<Home/>

},{

  path:'/home',
  element:<Home/>
},{

  path:'/my-projects',
  element:<Proyectos/>,

},{

  path:'/my-projects/:proyectId',
  element:<ItemDetails/>,
},{

  path:'/my-stories',
  element:<Stories/>
},{

  path:'/settings',
  element:<Settings/>

},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
