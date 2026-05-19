import { useState } from "react";
import { Link } from 'react-router-dom';
import './GameWindow.css';

const gameData = {
  title: "Your favorite new game!",
  mainImage: "mainphoto.png",
  thumbnails: [
    { id: 1, image: "image133.png"},
    { id: 2, image: "image144.png"},
    { id: 3, image: "image155.png"},
  ],
  coverImage: "image 25.png",
  description:
    "Marvel Rivals is a Super Hero Team-Based PVP Shooter! Assemble an all-star Marvel squad, devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, ever-changing battlefields across the continually evolving Marvel universe!",
  allReviews: "Mostly Positive",
  releaseDate: "20.05.2025",
  developer: "pixyda,inc.",
  publisher: "pixyda,inc.",
  ageRating: "16",
  ageRatingText: "16+",
  ageRatingSubtext: "Mild Violence",
  about: {
    title: "About this game",
    sections: [
      {
        id: 1,
        subtitle: "Switching attack methods",
        text: "You have been assigned to travel to Longvinter Island to research everything that makes the island special and uncover what other organizations have desperately tried to hide.",
        videoThumb: "image52.png"
      },
      {
        id: 2,
        subtitle: "Switching attack methods",
        text: "You have been assigned to travel to Longvinter Island to research everything that makes the island special",
      },
    ],
  },
  systemReqs: {
    minimum: {
      os: "Windows 10 64 bit",
      processor: "Intel Core i3-4150 / AMD FX-6300",
      memory: "1 GB RAM",
      gpu: "Intel ® HD Graphics 620",
      directx: "DirectX 11",
      storage: "800 MB",
      input: "Gamepad",
    },
    recommended: {
      os: "Windows 10 64 bit",
      processor: "Intel Core i3-4150 / AMD FX-6300",
      memory: "1 GB RAM",
      gpu: "Intel ® HD Graphics 620",
      directx: "DirectX 11",
      storage: "800 MB",
      input: "Gamepad",
    },
  },
  reviews: {
    score: "Mostly Positive",
    count: "45k",
    sortOptions: ["Recent", "Helpful", "Critical"],
    items: [
      {
        id: 1,
        user: "@user_generic",
        avatar: null,
        recommended: true,
        date: "November 23",
        text: "Its a shame this game has gotten the hate it has. Its actually pretty awesome. The combat is repetitive, yes, but so is Diablo??? There is an open world aspect that isnt like some stupid ubisoft game, but maybe alittle more like borderlands? Tons of quests, tons of dungeons. loads of loot.",
      },
      {
        id: 2,
        user: "@NonGenericUser",
        avatar: null,
        recommended: false,
        date: "November 25",
        text: "While definitely better than it was at launch, it still feels far too shallow and repetitive. The combat is fun at first, but you'll be fighting the same enemies in the same environments with unfun modifiers over, and over, and over again.",
      },
      {
        id: 3,
        user: "@NonGenericUser",
        avatar: null,
        recommended: false,
        date: "November 25",
        text: "Bad game",
      },
      {
        id: 4,
        user: "@NonGenericUser",
        avatar: null,
        recommended: false,
        date: "November 25",
        text: "—{ Graphics }—\n☐ You forget what reality is\n☐ Beautiful\n☐ Good\n☐ Decent\n☐ Bad\n☐ Don't look too long at it\n☐ MS-DOS\n\n—{ Gameplay }—\n☐ Very good",
        hasShowMore: true,
      },
      {
        id: 5,
        user: "@user_generic",
        avatar: null,
        recommended: true,
        date: "November 23",
        text: "> Watched Starship troopers before hand\n> Watched Terminator before hand\n> Watched Battle: Los Angeles before hand\n> Booted up Helldivers 2\n> First game I get absolutely curb stomped by a Bile Titan\n\n10/10 would play a third game",
      },
      {
        id: 6,
        user: "@user_generic",
        avatar: null,
        recommended: true,
        date: "November 23",
        text: "really really fun i love the warfare and free campaign",
      },
      {
        id: 7,
        user: "@user_generic",
        avatar: null,
        recommended: true,
        date: "November 23",
        text: "Great game. Extraction mode is best out there but needs some work on getting rid of cheaters.",
      },
    ],
  },
  pagination: {
    current: 1,
    total: 198,
  },
};

function StarIcon({ recommended }) {
  return recommended ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#4a7c2f" />
      <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#c0392b" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ThumbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.6)" />
      <polygon points="13,10 24,16 13,22" fill="white" />
    </svg>
  );
}

export default function GamePage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [sortBy, setSortBy] = useState("Recent");
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReviewExpand = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="gp-page">
      {/* Hero title */}
      <h1 className="gp-hero-title">{gameData.title}</h1>

      {/* Main content layout */}
      <div className="gp-layout">
        {/* LEFT COLUMN */}
        <div className="gp-left">
          {/* Main image */}
          <div className="gp-main-image-wrap">
            <img
              className="gp-main-image"
              src={
                selectedThumb === 0
                  ? gameData.mainImage
                  : gameData.thumbnails[selectedThumb - 1]?.image
              }
              alt="main"
            />
          </div>

          {/* Thumbnails */}
          <div className="gp-thumbs">
            <div
              className={`gp-thumb${selectedThumb === 0 ? " gp-thumb--active" : ""}`}
              onClick={() => setSelectedThumb(0)}
            >
              <img src={gameData.mainImage} alt="thumb" />
            </div>
            {gameData.thumbnails.map((t, i) => (
              <div
                key={t.id}
                className={`gp-thumb${selectedThumb === i + 1 ? " gp-thumb--active" : ""}`}
                onClick={() => setSelectedThumb(i + 1)}
              >
                <img src={t.image} alt="thumb" />
                {t.isVideo && (
                  <div className="gp-thumb-play">
                    <PlayIcon />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* About this game */}
          <section className="gp-about">
            <h2 className="gp-section-title">About this game</h2>

            {gameData.about.sections.map((section) => (
              <div key={section.id} className="gp-about-section">
                <h3 className="gp-about-subtitle">{section.subtitle}</h3>
                <p className="gp-about-text">{section.text}</p>
                {section.videoThumb && (
                  <div className="gp-video-wrap">
                    <img src={section.videoThumb} alt="video" className="gp-video-thumb" />
                    <div className="gp-video-overlay">
                      <span className="gp-video-time">
                        <span className="gp-video-dot" />
                        {section.videoDuration}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              className="gp-show-more"
              onClick={() => setShowMoreAbout((v) => !v)}
            >
              {showMoreAbout ? "Show less ▲" : "Show more ▼"}
            </button>
          </section>

          {/* System Requirements */}
          <section className="gp-sysreq">
            <h2 className="gp-section-title">System Requirements</h2>
            <div className="gp-sysreq-cols">
              {[
                { label: "Minimum", data: gameData.systemReqs.minimum },
                { label: "Recommended", data: gameData.systemReqs.recommended },
              ].map(({ label, data }) => (
                <div key={label} className="gp-sysreq-col">
                  <h3 className="gp-sysreq-label">{label}</h3>
                  <ul className="gp-sysreq-list">
                    <li><span>OS version:</span> {data.os}</li>
                    <li><span>Processor:</span> {data.processor}</li>
                    <li><span>Memory:</span> {data.memory}</li>
                    <li><span>GPU:</span> {data.gpu}</li>
                    <li><span>DirectX:</span> {data.directx}</li>
                    <li><span>Storage:</span> {data.storage}</li>
                    <li><span>Additional input device:</span> {data.input}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

              <div id='container_achiements2'>
      <h1 className='achievements'>Achievements</h1>
      <div className='achievements_cards'>
        <div className='achievements_card'>
          <img src='./card1.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Hard achievement</p>
          <p className='achievements_text2'>Completed by 0.5%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card2.png' alt='Hard achievement'/>
          <p className='achievements_text1'>First steps</p>
          <p className='achievements_text2'>Completed by 90%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card3.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Going forward</p>
          <p className='achievements_text2'>Completed by 70%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card4.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Collect all the “Bags o...</p>
          <p className='achievements_text2'>Completed by 7%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card5.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Complete your first ba...</p>
          <p className='achievements_text2'>Completed by 60%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card6.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Final boss</p>
          <p className='achievements_text2'>Completed by 10%</p>
        </div>
      </div>

      <Link className='show_more' to='/achievements'>
      <p>Show more</p>
      <img src='./tabler-icon-arrow-narrow-right.png' alt='arrow'/>
    </Link>
    </div>

          {/* Customer Reviews */}
          <section className="gp-reviews">
            <h2 className="gp-section-title">Customer reviews</h2>

            <div className="gp-reviews-score">
              <span className="gp-reviews-label">Review score:</span>
              <span className="gp-reviews-positive">
                {gameData.reviews.score} ({gameData.reviews.count} reviews)
              </span>
            </div>

            <div className="gp-reviews-sort">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="gp-sort-select"
              >
                {gameData.reviews.sortOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="gp-reviews-grid">
              {gameData.reviews.items.map((review) => (
                <div key={review.id} className="gp-review-card">
                  <div className="gp-review-header">
                    <div className="gp-review-user">
                      <StarIcon recommended={review.recommended} />
                      <div>
                        <div className="gp-review-username">{review.user}</div>
                        <div className="gp-review-rec">
                          {review.recommended
                            ? "This user recommends this game"
                            : "This user does not recommend this game"}
                        </div>
                      </div>
                    </div>
                    <span className="gp-review-date">Posted on: {review.date}</span>
                  </div>

                  <p className="gp-review-text" style={{ whiteSpace: "pre-line" }}>
                    {review.hasShowMore && !expandedReviews[review.id]
                      ? review.text.split("\n").slice(0, 5).join("\n")
                      : review.text}
                  </p>

                  {review.hasShowMore && (
                    <button
                      className="gp-show-more"
                      onClick={() => toggleReviewExpand(review.id)}
                    >
                      {expandedReviews[review.id] ? "Show less ▲" : "Show more ▼"}
                    </button>
                  )}

                  <div className="gp-review-footer">
                    <span>Was review helpful?</span>
                    <button className="gp-thumb-btn"><ThumbIcon /></button>
                    <button className="gp-thumb-btn gp-thumb-down">
                      <ThumbIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div id="container_profile4">
        <div className="previous">
          <img src="./tabler-icon-chevron-left.png" alt="prev" />
          <p>Previous</p>
        </div>
 
        <div className="numbers">
          <p style={{ color: '#7BC74D' }}>1</p>
          <p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
          <p>...</p>
          <p>20</p>
        </div>
 
        <div className="next">
          <p>Next</p>
          <img src="./tabler-icon-chevron-right.png" alt="next" />
        </div>
      </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="gp-right">
          <img className="gp-cover" src={gameData.coverImage} alt="cover" />

          <p className="gp-description">{gameData.description}</p>

          <div className="gp-meta">
            <div className="gp-meta-row">
              <span className="gp-meta-key">All Reviews</span>
              <span className="gp-meta-val gp-meta-positive">{gameData.allReviews}</span>
            </div>
            <div className="gp-meta-row">
              <span className="gp-meta-key">Release Date</span>
              <span className="gp-meta-val">{gameData.releaseDate}</span>
            </div>
            <div className="gp-meta-row">
              <span className="gp-meta-key">Developer</span>
              <span className="gp-meta-val">{gameData.developer}</span>
            </div>
            <div className="gp-meta-row">
              <span className="gp-meta-key">Publisher</span>
              <span className="gp-meta-val">{gameData.publisher}</span>
            </div>
          </div>

          <div className="gp-actions">
            <button className="gp-btn-add">Add to cart</button>
            <button className="gp-btn-wish">Wishlist</button>
          </div>

          <div className="gp-age-badge">
            <div className="gp-age-number">{gameData.ageRating}</div>
            <div className="gp-age-info">
              <div className="gp-age-text">{gameData.ageRatingText}</div>
              <div className="gp-age-sub">{gameData.ageRatingSubtext}</div>
              <a href="#" className="gp-age-link">www.pegi.info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
