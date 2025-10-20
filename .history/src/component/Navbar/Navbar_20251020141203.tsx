import './Navbar.css'; 
import BurgerIcon from '../../assets/img/nav-mobile.svg';
import CloseIcon from '../../assets/img/nav-close.svg';
import { useEffect, useState } from 'react';
import { NavLinkData } from '../../Data/NavbarData';
export interface NavbarData<T>{
     content: T;
    Link:T;
}
export interface NavbarProps<T>{
    logo: T;
    btn: T;
}
export default function Navbar({ logo, btn }: NavbarProps<string>) {
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
      <nav className={`navbar  ${isMenuOpen ? 'navbar-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          {NavLinkData.map((links, index) => (
            <li key={index}>
              <a href={links.Link}>{links.content}</a>
            </li>
          ))}

        </ul>
        <button className="nav-btn mobile-login">{btn}</button>

        <button className="burger" onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : BurgerIcon} alt="Menu Icon" />
        </button>
        <button className="nav-btn desktop-only">{btn}</button>
      </nav>
    </>
  );
}
