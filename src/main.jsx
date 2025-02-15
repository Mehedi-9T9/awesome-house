import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Routes from './Components/Routes/Routes.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider

} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={Routes}></RouterProvider>
          </div>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
