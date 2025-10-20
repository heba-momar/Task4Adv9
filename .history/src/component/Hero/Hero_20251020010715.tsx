import Heroitem from '../../Data/HeroItem';
import logo from '../../assets/image/heroimage.png'
import  './Hero.css'

const Hero=()=> {
  return (
        <section className="hero">
      <img className="hero-image" src={logo} alt="hero image" />
      <div className="hero-container">
        <div className="hero-title ">
          <h1 className='tittel f-s'>Discover a placeyou will love to live</h1> 
          <p className='f-des des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Imperdiet tempus felis vitae sit est quisque.</p> 
        </div>

        {/* Info Cards Section */}
        <div className="Info-cards">
           {Heroitem?.map((item)=>{
            return(
               <div className="InfoCard">
      <div className='Info-card-img'>
        <img src={item.icon} alt="" />
      </div>
      <div className="InfoCardDesc">
        <h3>{item.tittel}</h3>
        <p>{item.des}</p>
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