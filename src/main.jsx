/* eslint-disable no-dupe-keys */
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
import Error from './assets/Component/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
   
     {
      path:'/home',
      element:<Home></Home>,
      // loader:()=>fetch('Data.json'),
      // loader:()=>fetch('project.json')
      loader: async () => {
        const dataResponse = await fetch('Data.json');
        const projectResponse = await fetch('project.json');
        // const review = await fetch('review.json');
        const review= await fetch('review.json');
        
        // Assuming both are JSON responses
        const data = await dataResponse.json();
        const project = await projectResponse.json();
        const Reviews=await review.json()
        // const revieww = await review.json();
    
        return { data, project,Reviews }; // Return both data sources
      },
     },
     {
      path:'/home/:id',
      element:<Singlestate></Singlestate>,
      loader:()=>fetch('Data.json')

     },
     {
      path:'/ourproject',
      element:<Ourproject></Ourproject>,
      
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
