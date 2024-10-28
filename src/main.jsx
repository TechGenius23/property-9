import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Component/Root';
import Home from './assets/Component/Home';
import Review from './assets/Component/Review';
import Ourproject from './assets/Component/Ourproject';

import Singlestate from './assets/Component/Singlestate';
import Login from './assets/Component/Login';
import Register from './assets/Component/Register';
import Firebaseprovider from './assets/Component/Firebaseprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
   
     {
      path:'/home',
      element:<Home></Home>,
      loader:()=>fetch('Data.json'),
     
     },
     {
      path:'/home/:id',
      element:<Singlestate></Singlestate>,
      loader:()=>fetch('Data.json')

     },
     {
      path:'/ourproject',
      element:<Ourproject></Ourproject>,
      loader:()=>fetch('project.json')
     },
     {
     path:'/review',
     element:<Review></Review>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Firebaseprovider>
     <RouterProvider router={router} />
     </Firebaseprovider>
  </StrictMode>,
)
