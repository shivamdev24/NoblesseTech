import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Home from './pages/Home';

function App() {

  return (
    <main className='flex flex-col gap-10'>
      <Navbar/>
      <Home/>
      <Footer/>
    </main>
  )
}

export default App
