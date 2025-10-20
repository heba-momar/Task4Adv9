import Heroitem from '../../Data/HeroItem';
import logo from '../../assets/image/heroimage.png'
import  './Hero.css'
interface herodata {
title:string;
desc:string;
}
const Hero:React.FC< herodata>=({title,desc})=> {
  return (
        <section className="hero">
      <img className="hero-image" src={logo} alt="hero image" />
      <div className="hero-container">
        <div className="hero-title ">
          <h1>{title}</h1> 
          <p>{desc}</p> 
        </div>

        {/* Info Cards Section */}
        <div className="Info-cards">
           {Heroitem?.map((item)=>{
            return(
              <div className='bottomdiv'>
                <img src={item.icon}></img>
                <div className='bottomtext'>
                   <h3 className='tittel header'>{item.tittel}</h3>
                <p className='des des2'>{item.des}</p>   
                </div>
              
         </div>   
            )
        })}
        </div>

      </div>
    </section>
  )
}

export default Hero