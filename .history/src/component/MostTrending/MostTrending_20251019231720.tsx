import './MostTrending.css'
import Tittel from '../Tittel/Tittel.tsx'
import TrendingData from '../../Data/TrendingData.tsx'
import MostTrendingCard from './MostTrendingCard.tsx'
const MostTrending=()=> {
  return (
       <div className='MostTrending p-x'>
      <Tittel title='Most Trending' des='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
       StyleTittel='f-s tittels' Styledes='f-des des'/>
      <div className='Mostcard m-t'>
       {TrendingData?.map((item:{imge:string ,price:string,tittel:string,des:string,id:number})=>{
        return(
          <MostTrendingCard key={item.id}imge={item.imge} price={item.price}
          tittel={item.tittel} des={item.des}
          />
        )
       })}

      </div>
    </div>
  )
}
export default MostTrending
