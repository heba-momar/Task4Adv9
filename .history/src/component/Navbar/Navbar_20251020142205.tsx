import './Navbar.css'; 
import banner from '../../assets/image/banner.svg';
import CloseIcon from '../../assets/image/close.svg';
import logo from '../../assets/image/floralogo.svg'
import { useEffect, useState } from 'react';
import { NavLinkData } from '../../Data/NavbarData';
export interface NavbarData<T>{
     content: T;
    Link:T;
}
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(prev => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          {NavLinkData.map((links, index) => (
            <li key={index}>
              <a href={links.Link}>{links.content}</a>
            </li>
          ))}

        </ul>
        <button className="buttonlogo">Login</button>

        <button className="burger" onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : banner} alt="Menu Icon" />
        </button>
        <button className="buttonlogo desktop-only">login</button>
      </nav>
    </>
  );
}
