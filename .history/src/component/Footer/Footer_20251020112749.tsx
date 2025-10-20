import  './Footer.css'
import logo from '../../assets/image/floralogo.svg'
export interface items {
    name: string;
  }
export interface Section  {
    title: string; 
    links: items[]; 
  };
  
export interface Location  {
    title: string; 
    desc: string; 
  };
  
export interface BrandInfo  {
    desc: string; 
  };
  
export interface FooterData {
    brand: BrandInfo; 
    sections: Section[]; 
    location: Location; 
    socialLinks: LinkItem[]; 
    privacy: string;
    privacyLink: LinkItem[]
  };
const Footer:React.FC <FooterData>=({data})=> {
  return (
    <div className='Footer p-x'>
      <div className='footer1'>
       <img src={logo}></img>
       <p className='desfooter f-des'>{data.brand.description}</p>
      </div>
      <div className='footer2'>
       {data.sections.map((section, index)=>{
        return(
          <div key={index} className='footer2-col'>
            <h3 className='f-s tittel-ul'>{section.title}</h3>
          <ul className='item-ul'>
            {section.links.map((link,idx)=>{
              return(
            <li key={idx}>
                  <a className='item-a' href={link.path}>{link.name}</a> {/* Render individual links */}
                </li>  
              )
            })}
          
          </ul>
          </div>
        )
       })} 
        </div>
        <div className='footer3'>
       <h3>{data.location.title}</h3>
       <p>{data.location.desc}</p>
        </div>
        </div>
  )
}
export default Footer
