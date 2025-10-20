   import  './Hero.css'
   import Heroitem from '../../Data/HeroItem'
    import logo from '../../assets/image/background.webp'

    interface Heroo{
    title:string,
    desc:string  
    }
   const Hero:React.FC<Heroo>=({title,desc})=> {
      return (
    <div className="hero">

        <div className="hero-title">
          <h1 className='f-s tittel'>{title}</h1>
          <p className='f-des des'>{desc}</p>
        </div>
        <div className="hero-box">

          {Heroitem.map((item) => (
            <div key={item.id} className="hero-item">
              <div className="hero-item-img-box">
                <img src={item.icon} alt="" />
              </div>
              <div className="hero-item-desc">
                <h4 className='f-des tittelitem'>{item.tittel}</h4>
                <p className='desitem  f-des'>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='hero-img-container'>
          <img className='hero-img' src={logo} alt="" />
        </div>
      </div>
         )
    }
    export default Hero