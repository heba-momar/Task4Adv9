
import './App.css'
import DreamHome from './component/DreamHome/DreamHome'
import EstateDeals from './component/EstateDeals/EstateDeals'
import Hero from './component/Hero/Hero'
import HowWorks from './component/HowWorks/HowWorks'
import MostTrending from './component/MostTrending/MostTrending'

function App() {


  return (
    <>
    <Hero title='Discover a placeyou will love to live'
 desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Imperdiet tempus felis vitae sit est quisque.'/>
    <HowWorks/>
     <DreamHome/> 
     <MostTrending/>
     <EstateDeals/>
    </>
  )
}

export default App
