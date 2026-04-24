import './Myheader.css';
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
        <div className='brand'>
          <img className='logo' src='/VLogo.png' alt='logo'/>
          <span className='store'>STORE</span>
        </div>

        <nav className='nav'>
          <a>Discover</a>
          <a>Support</a>
          <a>News</a>
        </nav>

        <div className='searchHeader'>
          <FaSearch className="search-icon" />
          <input type='text' placeholder='Search store'/>
        </div>
      </div>

      <div className='rightHeader'>
        <CgProfile className='navIcon' />
        <FaRegHeart className='navIcon' />
        <RiShoppingCart2Line className='navIcon' />
        <TbWorld className='navIcon' />
        <button>Sign In</button>
        <button>Download</button>
      </div>
    </div>
    </header>
  );
};

export default Myheader;
