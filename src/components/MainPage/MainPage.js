import './MainPage.css';
import { Link } from 'react-router-dom';
import GameCard from '../GameCard/GameCard';
import { FiGift } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

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

  const freeGamesCards = [
    {
      id: 1,
      title: 'Garden Story',
      status: 'FREE NOW',
      dateText: 'Free Now - Feb 27 at 05:00 PM',
      image: '/gardenStory.jpg',
      isSoon: false
    },
    {
      id: 2,
      title: 'MAGES OF MYSTRALIA',
      status: 'FREE NOW',
      dateText: 'Free Now - Feb 27 at 05:00 PM',
      image: '/magesOfMystralia.jpg',
      isSoon: false
    },
    {
      id: 3,
      title: 'Them’s Fighting Herds',
      status: 'FREE SOON',
      dateText: 'Free Soon - Feb 30 at 05:00 PM',
      image: '/fightinHerds.jpg',
      isSoon: true
    }
  ];

  const mobileStoreCard = {
    title: 'Vision Store Mobile',
    text: 'Feudal Gotham’s Dark Knight, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance.',
    image: '/epicStore.jpg'
  };

  const showcaseColumns = [
    {
      id: 1,
      title: 'Top Sellers',
      items: [
        { id: 1, title: 'Marvel Rivals', subtitle: 'Free', image: '/marvelRivalsNEW.png', featured: true },
        { id: 2, title: 'Honkai: Star Rail', subtitle: 'Free', image: '/honkai.png' },
        { id: 3, title: 'Red Dead Redemption 2', subtitle: 'UAH 515', image: '/rdr2.jpg', discount: '-60%', oldPrice: 'UAH 1030' },
        { id: 4, title: 'Infinity Nikki', subtitle: 'Free', image: '/infinityNikki.jpg' },
        { id: 5, title: 'Genshin Impact', subtitle: 'Free', image: '/genshinImpact.jpg' }
      ]
    },
    {
      id: 2,
      title: 'Most Played',
      items: [
        { id: 1, title: 'Fortnite', subtitle: 'Free', image: '/fortnite.jpg' },
        { id: 2, title: 'Rocket League', subtitle: 'Free', image: '/rocketLeague.jpeg' },
        { id: 3, title: 'World War Z: Aftermath', subtitle: 'UAH 515', image: '/worldWarZ.jpg', discount: '-60%', oldPrice: 'UAH 1030' },
        { id: 4, title: 'Grand Theft Auto V', subtitle: 'UAH 735', image: '/GTAV.jpg' },
        { id: 5, title: 'Valorant', subtitle: 'Free', image: '/valorant.jpg' }
      ]
    },
    {
      id: 3,
      title: 'Top Upcoming Wishlisted',
      items: [
        { id: 1, title: 'Assassins Creed Shadows', subtitle: 'UAH 890', image: '/AssassinsCreedShadows.jpg' },
        { id: 2, title: 'Miki Royale', subtitle: 'Out on 3/10/25', image: '/mikiRoyale.jpg' },
        { id: 3, title: '33 Immortals', subtitle: 'Coming soon', image: '/33immortals.jpg' },
        { id: 4, title: 'Borderlands 4', subtitle: 'Coming soon', image: '/borderlands.jpg' },
        { id: 5, title: 'The Last of Us Part II Remastered', subtitle: 'UAH 735', image: '/thelastofus.jpg' }
      ]
    }
  ];

  const popularGames = [
    { id: 1, title: 'Grand Theft Auto V: Premium Edition', price: 629, image: '/GTAV.jpg' },
    { id: 2, title: 'VALORANT', price: 0, image: '/valorant.jpg' },
    { id: 3, title: 'Witch It', price: 369, image: '/witchIT.png' },
    { id: 4, title: 'Crosshair V2', price: 0, image: '/crosshairV2.png' },
    { id: 5, title: 'Farming Simulator 22', price: 459, image: '/farmsim22.jpg' },
    { id: 6, title: 'Zenless Zone Zero', price: 0, image: '/zenlessZoneZero.jpg' }
  ];

  const recentlyUpdatedGames = [
    { id: 1, title: 'Black Myth: Wukong', price: 1629, image: '/BlackMythWukong.jpg' },
    { id: 2, title: 'Star Trek Online', price: 0, image: '/startrek.jpg' },
    { id: 3, title: 'Disney Speedstorm', price: 0, image: '/DisneySpeedstorm.jpg' },
    { id: 4, title: 'Honkai: Star Rail', price: 0, image: '/honkai-star-rail-teb1n.jpg' },
    { id: 5, title: 'Destiny 2', price: 0, image: '/destiny2.jpg' },
    { id: 6, title: 'Honkai Impact 3rd', price: 0, image: '/HonkaiImpact3rd.jpg' }
  ];

  const nowOnStoreGames = [
    { id: 1, title: 'Hell Let Loose - Deluxe Edition', price: 1629, image: '/hell-let-loose-deluxe-edition-deluxe-edition-pc-game-steam-cover.jpg' },
    { id: 2, title: 'Hell Let Loose - Ultimate Edition', price: 1449, image: '/hellletloseU.jpg' },
    { id: 3, title: 'Hell Let Loose', price: 999, image: '/hellletloose.jpg' },
    { id: 4, title: 'Turmoil', price: 239, image: '/turmoil.jpg' },
    { id: 5, title: 'Vampire Survivors', price: 78, image: '/vampireS.jpg' },
    { id: 6, title: 'DREDGE - Digital Deluxe Edition', price: 549, image: '/dredge.jpg' }
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
            <Link className='heroButton' to='/game'>Learn more</Link>
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
                <Link className='promoCardButton' to='/game'>See In Shop ↗</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='winterSection'>
        <h2 className='titleSection'>Winter Sale Spotlight</h2>
        <div className='winterRow'>
          {winterSaleCards.map(card => (
            <Link className='winterCard' key={card.id} to='/game'>
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
            </Link>
          ))}
        </div>
      </div>

      <div className='weeklyDealsSection'>
        <div className='weeklyDealsRow'>
          {weeklyDealCards.map(card => (
            <Link className='weeklyDealCard' key={card.id} to='/game'>
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
            </Link>
          ))}
        </div>
      </div>

      <div className='freeGamesSection'>
        <div className='freeGamesPanel'>
          <div className='freeGamesTop'>
            <div className='freeGamesHeading'>
              <FiGift className='freeGamesIcon' />
              <h2>Free games!</h2>
            </div>
            <button className='freeGamesButton' type='button'>View More</button>
          </div>

          <div className='freeGamesRow'>
            {freeGamesCards.map(card => (
              <Link className='freeGameCard' key={card.id} to='/game'>
                <div className='freeGameMedia'>
                  <img className='freeGameImage' src={card.image} alt={card.title} />
                  <span className={`freeGameBadge${card.isSoon ? ' isSoon' : ''}`}>{card.status}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.dateText}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='mobileStoreSection'>
        <div className='mobileStoreCard'>
          <div className='mobileStoreMedia'>
            <img className='mobileStoreImage' src={mobileStoreCard.image} alt={mobileStoreCard.title} />
          </div>

          <div className='mobileStoreBody'>
            <h2>{mobileStoreCard.title}</h2>
            <p>{mobileStoreCard.text}</p>
            <Link className='mobileStoreButton' to='/news'>
              <span>Install Mobile</span>
              <FiExternalLink />
            </Link>
          </div>
        </div>
      </div>

      <div className='showcaseSection'>
        <div className='showcaseColumns'>
          {showcaseColumns.map(column => (
            <div className='showcaseColumn' key={column.id}>
              <h2 className='showcaseTitle'>
                <span>{column.title}</span>
                <span className='showcaseArrow'>›</span>
              </h2>

              <div className='showcaseList'>
                {column.items.map(item => (
                  <Link className={`showcaseItem${item.featured ? ' isFeatured' : ''}`} key={item.id} to='/game'>
                    <img className='showcaseItemImage' src={item.image} alt={item.title} />

                    <div className='showcaseItemBody'>
                      <h3>{item.title}</h3>

                      {item.discount ? (
                        <div className='showcasePriceRow'>
                          <span className='showcaseDiscount'>{item.discount}</span>
                          <span className='showcaseOldPrice'>{item.oldPrice}</span>
                          <span className='showcaseSubtitle'>{item.subtitle}</span>
                        </div>
                      ) : (
                        <p className='showcaseSubtitle'>{item.subtitle}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='popularGamesSection'>
        <h2 className='titleSection'>Popular Games</h2>
        <div className='gamesRow'>
          {popularGames.map(game => (<GameCard key={game.id} game={game} />))}
        </div>
      </div>

      <div className='recentlyUpdatedSection'>
        <h2 className='titleSection'>Recently Updated</h2>
        <div className='gamesRow'>
          {recentlyUpdatedGames.map(game => (<GameCard key={game.id} game={game} />))}
        </div>
      </div>

      <div className='nowOnStoreSection'>
        <h2 className='titleSection'>Now On The Store</h2>
        <div className='gamesRow'>
          {nowOnStoreGames.map(game => (<GameCard key={game.id} game={game} />))}
        </div>
      </div>

          <div id='container_profile4'>
      <div className='previous'>
        <img src='./tabler-icon-chevron-left.png' alt='arrow'/>
        <p>Previous</p>
      </div>

      <div className='numbers'>
        <p style={{color: '#7BC74D'}}>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>...</p>
        <p>90</p>
      </div>

      <div className='next'>
        <p>Next</p>
        <img src='./tabler-icon-chevron-right.png' alt='arrow'/>
      </div>
    </div>

    </div>

  );
};


export default MainPage;
