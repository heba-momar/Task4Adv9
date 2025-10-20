import  './Navbar.css'
import logo from '../../assets/image/floralogo.svg'
import { NavLink } from 'react-router-dom'
import { NavBarData } from '../../Data/NavbarData';
export interface LinkItem{
content:string;  
Link:string;
}
export interface NavBarComponent {
data:LinkItem[]
}
const Navbar:React.FC<NavBarComponent>=()=> {
  return (
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
  )
}
export default Navbar
