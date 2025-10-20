import './MostTrending.css'
import log from '../../assets/image/location (1).svg'
interface TrendingCard{
imge:string;   
price:string; 
tittel:string; 
des:string;  
}
const MostTrendingCard:React.FC <TrendingCard>=({imge,price,tittel,des})=> {
  return (
       <div className='containerTrending m-t box-shadow'>
      <img src={imge} className='imgetrend'></img>
      <div className='TrendingText'>
        <h4 className='price f-des'>{price}</h4>
        <h3 className='titteltrend f-s'>{tittel}</h3>
      </div>
      <div className='Trendingbottom'>
       <img src={log} className='log'></img>
       <p className='destrend'>{des}</p>
      </div>
    </div>
  )
}
export default MostTrendingCard
