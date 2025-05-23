import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProviders>
   <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
   </AuthProviders>

  </StrictMode>,
)
