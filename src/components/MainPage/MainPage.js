import './MainPage.css';

function MainPage () {
  return (
    <div className='main'>
      <div className='hero'>

        <div className='heroLeft'>
          <img className='ApexImgLeft' src='/apexBack.jpeg' alt='apexLeft'/>
        </div>

        <div className='heroRight'>
          <h2>APEX LEGENDS</h2>
          <p>NEW SEASON</p>

          <img className='ApexImgRight' src='/apexRightBackBottom.jpeg' alt='apexLeft'/>
          <img className='ApexImgRight' src='/apexRightBack.jpeg' alt='apexLeft'/>

          <div className='heroBottom'>
            <span>FREE</span>
            <button>Learn more</button>
          </div>

        </div>
      </div>
    </div>

  );
};


export default MainPage;
