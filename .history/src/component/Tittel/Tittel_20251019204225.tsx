import './Tittel.css'
interface TittelSection{
 title:string; 
des:string; 
StyleTittel:string ;
Styledes:string ;
}

const Tittel:React.FC<TittelSection> = ({ title, des,StyleTittel,Styledes})=> {
  return (
   <div className='containertittel'>
      <h2 className={StyleTittel}>{ title}</h2>
      <p className={Styledes}>{des}</p>
    </div>
  )
}
export default Tittel
