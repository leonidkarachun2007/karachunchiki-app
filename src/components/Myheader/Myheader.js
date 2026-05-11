import './Myheader.css';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

function Myheader () {
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

        <div className='searchHeader'>
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
      </div>
    </div>
    </header>
  );
};

export default Myheader;
