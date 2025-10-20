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
    description: string; 
  };
  
export interface BrandInfo  {
    description: string; 
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
       {data.sections.map((section,index))=>{
        return(
          <div key={index} className='footer2-col'>
            <h3>{section.tittel}</h3>
          <ul>
            {section.links.map((it,indeex)=>{
              return(
               <li key={idx}>
                  <a className="fs-20" href={link.path}>{link.name}</a> {/* Render individual links */}
                </li>   
              )
            })}
          
          </ul>
          </div>
        )
       })} 
        </div>
        </div>
  )
}
export default Footer
