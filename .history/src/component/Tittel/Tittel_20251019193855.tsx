interface TittelSection{
tittel:string; 
des:string;  
}

const Tittel:React.Fc<TittelSection> =({tittel , des})=> {
  return (
   <div className='containertittel'>
      <h2 className='f-s tittels'>{tittel}</h2>
      <p className='f-des des'>{des}</p>
    </div>
  )
}
export default Tittel
