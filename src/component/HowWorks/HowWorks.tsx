import WorkData from '../../Data/HowWorksData'
import Tittel from '../Tittel/Tittel'
import  './HowWorks.css'
import HowWorksCard from './HowWorksCard'

const HowWorks=()=> {
  return (
    <div className='containerwark p-x'>
    <Tittel title='How it Works' des='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
      StyleTittel='f-s tittels' Styledes='f-des des' />  
        <div className='work m-t'>
        {WorkData?.map((item,index)=>{
            return(
            <HowWorksCard
            key={index}
            icon={item.icon} 
            tittel={item.tittel}
            des={item.des}
            />
            )
        })}

      </div>
    </div>
  )
}
export default HowWorks

