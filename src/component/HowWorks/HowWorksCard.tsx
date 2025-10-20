import  './HowWorks.css'
interface HowWorksCards{
icon:string;
tittel:string;
des:string;
}
const HowWorksCard:React.FC<HowWorksCards>=({icon,tittel,des})=> {
  return (
    <div className='Workcard '>
     <img src={icon}></img>
     <h3 className='titelWork f-s'>{tittel}</h3>
     <p className='deswork f-des'>{des}</p>
    </div>  
  )
}
export default HowWorksCard
