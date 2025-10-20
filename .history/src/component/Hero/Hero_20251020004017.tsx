import  './Hero.css'
interface herodata {
title:string;
desc:string
}
const Hero:React.FC< herodata>=()=> {
  return (
        <section className="hero">
      {/* Background Image */}
      <img className="hero-image" src="/Task4/Images/Hero/hero.png" alt="hero image" />
      {/* Main content container */}
      <div className="hero-container">
        {/* Title and description section */}
        <div className="hero-title px-150">
          <h1>{data.title}</h1> {/* Main heading */}
          <p>{data.desc}</p> {/* Description or subheading */}
        </div>

        {/* Info Cards Section */}
        <div className="Info-cards">
          {/* Map over herodata array and render an InfoCard for each item */}
          {herodata.map((itemData, index) => (
            <InfoCard key={index} item={itemData} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero