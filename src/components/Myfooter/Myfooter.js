import './Myfooter.css';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";

function Myfooter () {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <div className='footerInner'>
        <div className='footerTop'>
          <div className='footerLeft'>
            <div className='socials'>
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
            </div>

            <p className='footerText'>
              © 2026 MCKarach Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
              <br />
              VAT included in all prices where applicable.
            </p>
          </div>

          <div className='footerRight'>
            <button className='upButton' type='button' aria-label='Scroll to top' onClick={handleScrollTop}>
              <SlArrowUp />
            </button>
            <div className='footerLogo'>
              <img className='logoImg' src='/VLogo.png' alt='V logo' />
            </div>
          </div>
        </div>

        <div className='footerLinks'>
          <a>Terms of Service</a>
          <a>Jobs</a>
          <a>Rules</a>
          <a>Contracts</a>
          <a>Gift cards</a>
          <a>Facebook</a>
          <a>Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Myfooter;
