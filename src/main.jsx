import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProviders from './components/providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <AuthProviders>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </HelmetProvider>
    </AuthProviders>
  </div>
)