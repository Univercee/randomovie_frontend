import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CFooter from './layout/Footer'
import CHeader from './layout/Header'
import { RouterProvider } from 'react-router-dom';
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrapper'>
      <CHeader></CHeader>
      <RouterProvider router={router}/>
      <CFooter></CFooter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
