import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    

    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<App />}  >
      <Route path=''  element={<Home />}  />
      <Route path='/contact'  element={<Contact />}  />
      <Route path='/service'  element={<Service />}  />


      </Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
