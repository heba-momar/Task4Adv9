import  './Footer.css'
import logo from '../../assets/image/floralogo.svg'
export interface LinkItem {
    name: string;
    path: string;
  }
export interface Section  {
    title: string; 
    links: LinkItem[]; 
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
        </div>
        </div>
  )
}
export default Footer
