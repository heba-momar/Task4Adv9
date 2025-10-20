import './EstateDeals.css'
import EstateDealsData from '../../Data/DealsDatas'
import { useState } from 'react'
import EstateDealsCard from './EstateDealsCard'
import Tittel from '../Tittel/Tittel'
const EstateDeals=()=> {
        const tabs=['Residential Property','Commercial Property','Agriculture Property','Industrial Property']
    const[active,setActive]=useState(0) 
   const dealForTab =(index:number)=>{
      if(index===0)  return EstateDealsData.slice(0,3)       
      if(index===1)  return EstateDealsData.slice(3,6)    
      if(index===2)  return EstateDealsData.slice(6,9)         
      if(index===3)  return EstateDealsData.slice(9,12)       
        return[]            
   }
    const FilterTab=dealForTab(active)  
  return (
      <div className='EstateDeals p-x'>
      <Tittel title='Best Real Estate Deals' des='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
       StyleTittel='f-s tittels' Styledes='f-des des'/>
  
    <div className='EstateDealsContainer'>
        <div className='EstateDeals-ul'>
       <ul className='list'>
       {tabs?.map((item,index)=>{
        return(
            <li className={`${active===index?"activ":""}`} onClick={()=>setActive(index)}>{item}</li>
        )
       })}

       </ul>
        </div>
    </div>
    <div className='cardEstateDeals m-t'>
    {FilterTab?.map((icon)=>{
return(
    <EstateDealsCard  imge={icon.imge} des1={icon.des1} des2={icon.des2}/>

) 
    })}
    </div>
      </div>  
  )
}
export default EstateDeals

