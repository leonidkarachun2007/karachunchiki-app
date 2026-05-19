import './Myheader.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

function Myheader () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((value) => !value);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='header'> 
    <div className='headerInner'>
      <div className='leftHeader'>
        <Link className='brand' to='/'>
          <img className='logo' src='/VLogo.png' alt='logo'/>
          <span className='store'>STORE</span>
        </Link>

        <nav className='nav'>
          <NavLink to='/'>Discover</NavLink>
          <NavLink to='/support'>Support</NavLink>
          <NavLink to='/news'>News</NavLink>
        </nav>

        <div className='searchHeader searchHeaderDesktop'>
          <FaSearch className="search-icon" />
          <input type='text' placeholder='Search store'/>
        </div>
      </div>

      <div className='rightHeader'>
        <NavLink to='/profile' className='iconLink' aria-label='Profile'>
          <CgProfile className='navIcon' />
        </NavLink>
        <NavLink to='/wishlist' className='iconLink' aria-label='Wishlist'>
          <FaRegHeart className='navIcon' />
        </NavLink>
        <NavLink to='/cart' className='iconLink' aria-label='Cart'>
          <RiShoppingCart2Line className='navIcon' />
        </NavLink>
        <TbWorld className='navIcon' />
        <Link className='headerButton signButton' to='/login'>Sign In</Link>
        <a className='headerButton downloadButton' href='/' onClick={(event) => event.preventDefault()}>Download</a>
        <button
          className='menuButton'
          type='button'
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={handleMobileMenuToggle}
        >
          <span className='burgerLine' />
          <span className='burgerLine' />
          <span className='burgerLine' />
        </button>
      </div>
    </div>

    <div className={`mobileMenu${isMobileMenuOpen ? ' mobileMenuOpen' : ''}`}>
      <NavLink to='/' onClick={handleMobileMenuClose}>Discover</NavLink>
      <NavLink to='/support' onClick={handleMobileMenuClose}>Support</NavLink>
      <NavLink to='/news' onClick={handleMobileMenuClose}>News</NavLink>
      <a href='/' onClick={(event) => event.preventDefault()}>Download</a>
    </div>

    <div className='mobileSearch'>
      <div className='searchHeader searchHeaderMobile'>
        <FaSearch className="search-icon" />
        <input type='text' placeholder='Search store'/>
      </div>
    </div>
    </header>
  );
};

export default Myheader;
