import  './Navbar.css'
import logo from '../../assets/image/floralogo.svg'
import banner from '../../assets/image/banner.svg'
//import close from '../../assets/image/close.svg'
import { NavLink } from 'react-router-dom'
import { NavBarData } from '../../Data/NavbarData';
//import { useState } from 'react'
export interface LinkItem{
content:string;  
Link:string;
}
export interface NavBarComponent {
data:LinkItem[]
}
// const[activeItem,SetactiveItem]=useState() ;
//const [IsOpen,SetIsOpen] = useState(false);
// const icon= IsOpen ? close :banner
//const toggelMenu=()=>{
//  SetIsOpen(!IsOpen)
//}
const Navbar:React.FC<NavBarComponent>=()=> {
  return (
    <>
     <nav className='Navbarcontainr'>
      <img src={logo} className='logo'></img>
         <ul className='itemNav'>
      {NavBarData.map((item:LinkItem,index)=> {
          return(
       <li  key={index} >
        <NavLink to={item.Link}>{item.content}</NavLink></li>
          )
      }) } 
    </ul> 
    <button className='buttonlogo'>Login</button>

   </nav>
   {/* <div className='subnav' onClick={toggelMenu}>
      <img src={logo} className='logo'></img>
      <img src={icon} alt='banner'/>
      
          <ul className={`itemNav-sidbar ${IsOpen && "show"}`}>
     {NavBarData?.map((item,index)=> {
          return(
       <li key={index} onClick={()=>toggelMenu()}
       className={`${activeItem == item.content ? 'active' : ''} `}>
       <NavLink to={item?.Link}>{item?.content}</NavLink></li>

          )
      }) } 
      
     </ul> 
     </div>*/}
     <div className='subnav'>
      <img src={logo} className='logo'></img>
      <img src={banner} alt='banner'/>
     </div>
            </>
  )
}
export default Navbar
