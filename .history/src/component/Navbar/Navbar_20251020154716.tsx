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
  const [show, setShow] = useState<boolean>(false)
    const showHandle = () => {
        setShow(!show)
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
     <div className={ show?'subnav':'Navbarcontainr'}>
      <img src={logo} className='logo'></img>
      <img src={banner} alt='banner' onClick={showHandle}/>
          <div className={`navMenu ${show ? "show" : ""}`}>
                <img src={close} alt="close" />
                <ul className='shaw-ul'>
                    {NavBarData.map((item:LinkItem, index) => {
                        return (
                          <li  key={index} className='shaw-'>
        <NavLink to={item.Link}>{item.content}</NavLink></li>
                        )
                    })}
                </ul>
                <button className="login">Login</button>
            </div>
     </div> 
            </>
  )
}
export default Navbar
