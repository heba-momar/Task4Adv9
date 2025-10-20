
import './App.css'
import DreamHome from './component/DreamHome/DreamHome'
import EstateDeals from './component/EstateDeals/EstateDeals'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import HowWorks from './component/HowWorks/HowWorks'
import MostTrending from './component/MostTrending/MostTrending'
import Navbar from './component/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar/>
   {/*  <Hero />*/}
    <HowWorks/>
     <DreamHome/> 
     <MostTrending/>
     <EstateDeals/>
     <Footer/>
    </>
  )
}

export default App
