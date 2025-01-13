import React, { useState,useEffect } from "react";
import "../../styles/Header.css"
import Search from "../Icon/Search";
import {Link} from "react-router-dom";
import Dropdown from "../Shared/Dropdown";
import Logo from "../Icon/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuSticky, setIsMenuSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsMenuSticky(true);
    } else {
      setIsMenuSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Открытие/закрытие меню
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen); // Открытие/закрытие поиска

  return (
    <header className={`header  ${isMenuSticky ? "sticky" : ""}`}>
      <div className="header-bar">
        {/*<div className="hamburger-container">*/}
          <button className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            {/*<span className={'line'}/>*/}
            {/*<span className={'line'}/>*/}
            {/*<span className={'line'}/>*/}
            ☰
          </button>
        {/*</div>*/}
          <div className="logo">
            <Logo/>
            <button className="search-icon" onClick={toggleSearch}>
              <Search/>
            </button>
          </div>
          <div className={'logo-line'}></div>
          <nav
            className={`menu ${isMenuOpen ? "open" : ""}`}
          >
            <ul>
              <Dropdown>
                <li className={'menu-item'}><Link to={'/Demos'}>Demos </Link></li>
              </Dropdown>
              <Dropdown>
                <li className={'menu-item'}><Link to={'/Post'}>Post </Link></li>
              </Dropdown>
              <li className={'menu-item'}><Link to={'/Features'}>Features</Link></li>
              <li className={'menu-item'}><Link to={'/Categories'}>Categories</Link></li>
              <li className={'menu-item'}><Link to={'/Shop'}>Shop</Link></li>
              <li className={'menu-item'}><Link to={'/BuyNow'}>Buy Now</Link></li>
            </ul>
          </nav>
        </div>

    </header>
);
};

export default Header;
