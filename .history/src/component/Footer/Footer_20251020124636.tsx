import  './Footer.css'
import logo from '../../assets/image/floralogo.svg'
export interface LinkItem {
    name: string;
  }
export interface Section  {
    title: string; 
    links: LinkItem[]; 
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
    <div className='p-x footers'>
    <div className='Footer'>
      <div className='footer1'>
       <img src={logo}></img>
       <p className='desfooter f-des'>{data.brand.desc}</p>
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
                  <a className='item-a'>{link.name}</a> 
                </li>  
              )
            })}
          
          </ul>
          </div>
        )
       })} 
        </div>
        <div className='footer3'>
       <h3 className='f-s tittel-ul'>{data.location.title}</h3>
       <p className='des-location'>{data.location.desc}</p>
       <div className='button-icons'>
       {data.socialLinks?.map((item:LinkItem,index)=>{
        return(
          <div className='button-icon'>
             <img key={index} src={item.name} ></img> 
          </div>
           
       
        )
       })}
       </div>
        </div>
         </div>
        <div className='footer4'>
          <div className='line'></div>
          <span>{data.privacy}</span>
      {data. privacyLink.map((item:LinkItem,index)=>{
        return(
        <span>{item.name}</span>
        )
      })}
        </div>
       
          </div>
  )
}
export default Footer
