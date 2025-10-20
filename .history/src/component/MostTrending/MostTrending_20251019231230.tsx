import './MostTrending.css'
import Tittel from '../Tittel/Tittel.tsx'
import TrendingData from '../../Data/TrendingData.tsx'
import MostTrendingCard from './MostTrendingCard.tsx'
interface {
TrendingData :Trending[]    
}

const MostTrending=()=> {
  return (
       <div className='MostTrending p-x'>
      <Tittel title='Most Trending' des='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
       StyleTittel='f-s tittels' Styledes='f-des des'/>
      <div className='Mostcard m-t'>
       {TrendingData?.map((item,index)=>{
        return(
          <MostTrendingCard key={index}imge={item.imge} price={item.price}
          tittel={item.tittel} des={item.des}
          />
        )
       })}

      </div>
    </div>
  )
}
export default MostTrending
