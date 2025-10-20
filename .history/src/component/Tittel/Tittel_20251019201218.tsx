interface TittelSection{
 title:string; 
des:string;  
}

const Tittel:React.FC<TittelSection> = ({ title, des})=> {
  return (
   <div className='containertittel'>
      <h2 className='f-s tittels'>{ title}</h2>
      <p className='f-des des'>{des}</p>
    </div>
  )
}
export default Tittel
