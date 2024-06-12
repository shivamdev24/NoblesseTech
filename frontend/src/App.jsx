import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
     <main className='flex flex-col'>
      <Navbar/>
      <Home/>
      <Footer/>
    </main>
  )
  
}

export default App



