import  './Navbar.css'
import logo from '../../assets/image/floralogo.svg'
import { NavLink } from 'react-router-dom'
interface LinkItem{
content:string;  
Link:string;
}
interface NavBarComponent {
data:LinkItem[]
}
const Navbar:React.FC<NavBarComponent>=({data})=> {
  return (
     <nav className='Navbarcontainr'>
      <img src={logo} className='logo'></img>
         <ul className='itemNav'>
      {data?.map((item:LinkItem,index)=> {
          return(
       <li  key={index} >
        <NavLink to={item?.Link}>{item?.content}</NavLink></li>
          )
      }) } 
    </ul> 
    <button className='buttonlogo'>Login</button>
   </nav>
  )
}
export default Navbar
