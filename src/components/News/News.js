import './News.css';

const newsCards = [
  {
    id: 1,
    image: '/starWarsKnight.jpg',
    time: '4 days ago',
    title: 'Star Wars: Knights of the Old Republic I and II available for free on the Epic Games Store on mobile',
    text: 'Feudal Gotham’s Dark Knight, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance.'
  },
  {
    id: 2,
    image: '/killingFloor.png',
    time: '2 days ago',
    title: 'How The Thing, Aliens, and Predator helped shape Killing Floor 3',
    text: 'Killing Floor 3 devs talk body horror, storytelling, and finding the balance'
  }
];

const secondaryNewsSections = [
  [
    {
      id: 1,
      image: '/smiteArtemis.jpg',
      time: '4 days ago',
      title: "SMITE 2 beginner's guide: Tips for understanding gods, roles, and teamwork",
      text: "Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether you're new to SMITE or new to the genre."
    },
    {
      id: 2,
      image: '/apexBack.jpeg',
      time: '1 day ago',
      title: 'Black Hawk Down returns in Delta Force: a free co-op battle available now',
      text: 'Delta Force: Black Hawk Down is out now for free. Relive the brutal battle for survival via Epic Games Store'
    }
  ],
  [
    {
      id: 3,
      image: '/goro.jpg',
      time: '20 days ago',
      title: 'Forge your legend in Blades of Fire, coming to Epic Game Store this May',
      text: 'Only you can answer the riddle of steel, master the ancient flames, and rise against the darkness consuming the kingdom. Wield legendary weapons, face ruthless enemies, and carve your name into history in an epic journey where every battle shapes your destiny.'
    },
    {
      id: 4,
      image: '/tetelaika.jpg',
      time: '14 days ago',
      title: 'Infinity Nikki daily guide: Fastest ways to earn Bling, Diamonds, and crafting materials',
      text: 'Need more Bling, Bubbles, and Diamonds in Infinity Nikki but ran out of quests? No worries! Here are a few simple daily activities you can do to fill up your backpack in no time.'
    }
  ],
  [
    {
      id: 5,
      image: '/wereCleanerShop.jpeg',
      time: '4 days ago',
      title: 'Night shift nightmare: The WereCleaner turns office cleaning into a moral dilemma',
      text: 'The WereCleaner combines office drudgery with lycanthropic murder. Discover how a USC student’s capstone project became a surprise hit.'
    },
    {
      id: 6,
      image: '/futureGames.jpg',
      time: '6 days ago',
      title: 'Shadowheart and Nathan Drake will host the Future Games Show Spring Showcase on March 20',
      text: 'The show will have over 40 titles, including FBC: Firebreak and Clair Obscur: Expedition 33. and more'
    }
  ],
  [
    {
      id: 7,
      image: '/33immortals.jpg',
      time: '11 days ago',
      title: 'Deity-slaying co-op roguelike 33 Immortals releases on Epic Games Store March 18',
      text: 'Learn all about the 33-player co-op slasher that redefines the roguelike genre'
    },
    {
      id: 8,
      image: '/killing-floor-3-wants-to-tick-all-the-modern-multiplayer-boxes-3840x2160-7d97b4d07c36.jpg',
      time: '2 days ago',
      title: 'Killing Floor 3 wants to tick all the modern multiplayer boxes',
      text: 'A brutal new vision of survival horror delivers faster combat, deadlier Zeds, and intense co-op action unlike anything the franchise has seen before. From redesigned classes to cinematic gore and chaotic firefights, the next evolution of Killing Floor is shaping up to be its most ambitious chapter yet.'
    }
  ]
];

const News = () => (
  <div className="newsPage">
    <h1 className="newsTitle">Relevant News</h1>

    <div className="newsGrid">
      {newsCards.map((card) => (
        <article className="newsCard" key={card.id}>
          <img className="newsCardImage" src={card.image} alt={card.title} />
          <span className="newsCardTime">{card.time}</span>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <button className="newsReadMore" type="button">Read More</button>
        </article>
      ))}
    </div>

    {secondaryNewsSections.map((section, index) => (
      <div className="secondaryNewsGrid" key={index}>
        {section.map((card) => (
          <article className="secondaryNewsCard" key={card.id}>
            <img className="secondaryNewsImage" src={card.image} alt={card.title} />

            <div className="secondaryNewsBody">
              <span className="newsCardTime">{card.time}</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <button className="newsReadMore" type="button">Read More</button>
            </div>
          </article>
        ))}
      </div>
    ))}

    <div id="newsPagination">
      <div className="previous">
        <img src="./tabler-icon-chevron-left.png" alt="arrow" />
        <p>Previous</p>
      </div>

      <div className="numbers">
        <p style={{ color: '#7BC74D' }}>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>...</p>
        <p>228</p>
      </div>

      <div className="next">
        <p>Next</p>
        <img src="./tabler-icon-chevron-right.png" alt="arrow" />
      </div>
    </div>
  </div>
);

export default News;
