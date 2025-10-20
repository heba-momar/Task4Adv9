import  './EstateDeals.css'
interface  EstateDealsCards{
 imge:string;  
 des1:string;
des2:string; 
}
const EstateDealsCard:React.FC<EstateDealsCards>=({imge,des1,des2})=> {
  return (
       <div className='dealscard' >
         <img src={imge} className='dealimg'></img> 
         <div className='textDeals'>
            <span>{des1}</span>
            <span>{des2}</span>
            </div>  
    </div>
  )
}
export default EstateDealsCard
