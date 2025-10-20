import  './Navbar.css'
import logo from '../../assets/image/floralogo.svg'
import banner from '../../assets/image/banner.svg'
import close from '../../assets/image/close.svg'
import { NavLink } from 'react-router-dom'
import { NavBarData } from '../../Data/NavbarData';
import { useState } from 'react'
export interface LinkItem{
content:string;  
Link:string;
}
export interface NavBarComponent {
data:LinkItem[]
}
// const[activeItem,SetactiveItem]=useState() ;
const [IsOpen,SetIsOpen] = useState(false);
 const icon= IsOpen ? close :banner
const toggelMenu=()=>{
  SetIsOpen(!IsOpen)
}
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

            </>
  )
}
export default Navbar
