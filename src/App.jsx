import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollTop.jsx";

function App() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
  
}

export default App



