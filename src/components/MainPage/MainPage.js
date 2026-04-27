import './MainPage.css';
import GameCard from '../GameCard/GameCard';

function MainPage () {
    const games = [
    { id: 1, title: "The End of the Sun", price: 515, image: "/theEndOfTheSun.png" },
    { id: 2, title: "Apex Legends", price: 0, image: "/apexLegends.jpg" },
    { id: 3, title: "The WereCleaner", price: 325, image: "/theWereCleaner.png" },
    { id: 4, title: "Into the Emberlands", price: 355, image: "/intoTheEmberlands.png" },
    { id: 5, title: "Kingdom Come Deliverance II", price: 1030, image: "/kingdomCome.jpg" },
    { id: 6, title: "Final Fantasy VII", price: 975, image: "/finalFantasy.jpg" }
  ];

  const promoCards = [
    {
      id: 1,
      title: 'Fortnite',
      text: 'Feudal Gotham\'s Dark Knight, Ninja Knight Batman, and the malicious wildcard strike with a vengeance.',
      image: '/fortniteGotham.jpg'
    },
    {
      id: 2,
      title: 'Fortnite',
      text: 'BANG! Take your shot with bounty hunters and bring a fresh crossover vibe straight into the shop.',
      image: '/fortniteAnime.jpg'
    },
    {
      id: 3,
      title: 'Fortnite',
      text: 'A new collab arrives with bold heroes and villains stepping into Fortnite for a limited-time drop.',
      image: '/fortniteHeroAnime.jpg'
    }
  ];

  const winterSaleCards = [
    { id: 1, title: 'The End of the Sun', oldPrice: 1030, price: 515, discount: '-60%', image: '/theEndOfTheSun.png' },
    { id: 2, title: 'Ranch Simulator', oldPrice: 170, price: 70, discount: '-60%', image: '/ranchSim.jpg' },
    { id: 3, title: 'FARCRY 3', oldPrice: 720, price: 515, discount: '-40%', image: '/farCry3.jpeg' },
    { id: 4, title: 'FARCRY 4', oldPrice: 1120, price: 815, discount: '-40%', image: '/farCry4.jpg' },
    { id: 5, title: 'FARCRY 5', oldPrice: 1620, price: 810, discount: '-50%', image: '/farCry5.jpg' },
    { id: 6, title: 'FARCRY 6', oldPrice: 2070, price: 1010, discount: '-50%', image: '/farCry6.jpg' }
  ];

  const weeklyDealCards = [
    {
      id: 1,
      title: 'Teenage Mutant Ninja Turtles: Splintered Fate',
      oldPrice: 1030,
      price: 515,
      discount: '-60%',
      image: '/ninjaTurtle.jpg'
    },
    {
      id: 2,
      title: 'Lego: Horizon Adventures',
      oldPrice: 930,
      price: 600,
      discount: '-30%',
      image: '/legoHorizon.jpg'
    },
    {
      id: 3,
      title: 'Disney Dreamlight Valley',
      oldPrice: 550,
      price: 230,
      discount: '-60%',
      image: '/dreamlight.jpg'
    }
  ];

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

      <div className='gamesSection'>
        <h2 className='titleSection'>
          Discover Something New
        </h2>

        <div className='gamesRow'>
          {games.map(game => (<GameCard key={game.id} game={game} />))}
        </div>
      </div>

      <div className='promoSection'>
        <div className='promoRow'>
          {promoCards.map(card => (
            <div className='promoCard' key={card.id}>
              <img className='promoCardImage' src={card.image} alt={card.title} />
              <div className='promoCardBody'>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button type='button'>See In Shop ↗</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='winterSection'>
        <h2 className='titleSection'>Winter Sale Spotlight</h2>
        <div className='winterRow'>
          {winterSaleCards.map(card => (
            <div className='winterCard' key={card.id}>
              <img className='winterCardImage' src={card.image} alt={card.title} />
              <span className='winterCardType'>Base Game</span>
              <h3>{card.title}</h3>
              <div className='winterPriceRow'>
                <span className='winterDiscount'>{card.discount}</span>
                <div className='winterPrices'>
                  <span className='winterOldPrice'>UAH {card.oldPrice}</span>
                  <span className='winterNewPrice'>UAH {card.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='weeklyDealsSection'>
        <div className='weeklyDealsRow'>
          {weeklyDealCards.map(card => (
            <div className='weeklyDealCard' key={card.id}>
              <div className='weeklyDealMedia'>
                <img className='weeklyDealImage' src={card.image} alt={card.title} />
                <span className='weeklyDealBadge'>Deals of the Week</span>
              </div>
              <h3>{card.title}</h3>
              <div className='weeklyDealPriceRow'>
                <span className='weeklyDealDiscount'>{card.discount}</span>
                <span className='weeklyDealOldPrice'>UAH {card.oldPrice}</span>
                <span className='weeklyDealNewPrice'>UAH {card.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
};


export default MainPage;
