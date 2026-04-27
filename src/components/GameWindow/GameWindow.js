import React, { useState } from "react";
import "./GameWindow.css";

const defaultGame = {
  title: "Your favorite new game!",

  // ╔══════════════════════════════════════════╗
  // ║  ВСТАВЬ ПУТЬ К ГЛАВНОМУ ИЗОБРАЖЕНИЮ      ║
  // ╚══════════════════════════════════════════╝
  mainImage: "/images/game-main.jpg",

  // ╔══════════════════════════════════════════╗
  // ║  ВСТАВЬ ПУТЬ К ЛОГОТИПУ ИГРЫ             ║
  // ╚══════════════════════════════════════════╝
  logo: "/images/game-logo.png",

  description:
    "Marvel Rivals is a Super Hero Team-Based PVP Shooter! Assemble an all-star Marvel squad, devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, ever-changing battlefields across the continually evolving Marvel universe!",

  reviews: "Mostly Positive",
  releaseDate: "20.05.2025",
  developer: "pixydа.inc",
  publisher: "pixydа.inc",

  ageRating: "16",
  ageRatingText: "Mild Violence",

  // ╔══════════════════════════════════════════╗
  // ║  ВСТАВЬ ПУТИ К ПРЕВЬЮ (4 КАРТИНКИ)       ║
  // ╚══════════════════════════════════════════╝
  previews: [
    { image: "/images/preview1.jpg", isVideo: false },
    { image: "/images/preview2.jpg", isVideo: true },
    { image: "/images/preview3.jpg", isVideo: false },
    { image: "/images/preview4.jpg", isVideo: true },
  ],

  aboutSubtitle: "Switching attack methods",
  aboutText:
    "You have been assigned to travel to Longvinter Island to research everything that makes the island special and uncover what other organizations have desperately tried to hide.",

  // ╔══════════════════════════════════════════╗
  // ║  ВСТАВЬ ПУТЬ К СКРИНШОТУ ГЕЙМПЛЕЯ        ║
  // ╚══════════════════════════════════════════╝
  gameplayImage: "/images/gameplay.jpg",
  gameplayTimer: "25:34",

  sysreq: {
    minimum: {
      "OS version": "Windows 10 64 bit",
      Processor: "Intel Core i3-4150 / AMD FX-6300",
      Memory: "1 GB RAM",
      GPU: "Intel ® HD Graphics 620",
      DirectX: "DirectX 11",
      Storage: "800 MB",
      "Additional input device": "Gamepad",
    },
    recommended: {
      "OS version": "Windows 10 64 bit",
      Processor: "Intel Core i3-4150 / AMD FX-6300",
      Memory: "6B RAM",
      GPU: "Intel ® HD Graphics 620",
      DirectX: "DirectX 11",
      Storage: "800 MB",
      "Additional input device": "Gamepad",
    },
  },
};

export default function GameWindow({ game = defaultGame }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="game-window">
      <h1 className="game-window__title">{game.title}</h1>

      {/* ===== ВЕРХНИЙ БЛОК: главное фото + сайдбар ===== */}
      <div className="game-window__top">
        <div className="game-window__main-image">
          <img src={game.mainImage} alt="main" />
        </div>

        <div className="game-window__sidebar">
          <div className="game-window__logo">
            <img src={game.logo} alt="logo" />
          </div>
          <p className="game-window__description">{game.description}</p>
          <div className="game-window__meta">
            <div className="game-window__meta-row">
              <span className="game-window__meta-label">All Reviews</span>
              <span className="game-window__meta-value game-window__meta-value--positive">{game.reviews}</span>
            </div>
            <div className="game-window__meta-row">
              <span className="game-window__meta-label">Release Date</span>
              <span className="game-window__meta-value">{game.releaseDate}</span>
            </div>
            <div className="game-window__meta-row">
              <span className="game-window__meta-label">Developer</span>
              <span className="game-window__meta-value">{game.developer}</span>
            </div>
            <div className="game-window__meta-row">
              <span className="game-window__meta-label">Publisher</span>
              <span className="game-window__meta-value">{game.publisher}</span>
            </div>
          </div>
          <div className="game-window__buttons">
            <button className="game-window__btn game-window__btn--primary">Add to cart</button>
            <button className="game-window__btn game-window__btn--secondary">Wishlist</button>
          </div>
          <div className="game-window__rating">
            <div className="game-window__rating-badge">{game.ageRating}</div>
            <span className="game-window__rating-text">{game.ageRatingText}</span>
          </div>
        </div>
      </div>

      {/* ===== ПРЕВЬЮ ===== */}
      <div className="game-window__previews">
        {game.previews.map((p, i) => (
          <div key={i} className="game-window__preview">
            <img src={p.image} alt={`preview ${i + 1}`} />
            {p.isVideo && <div className="game-window__preview-play">▶</div>}
          </div>
        ))}
      </div>

      {/* ===== ABOUT + САЙДБАР (две колонки) ===== */}
      <div className="game-window__about-layout">

        {/* Левая колонка */}
        <div className="game-window__about-left">
          <h2 className="game-window__about-title">About this game</h2>
          <h3 className="game-window__about-subtitle">{game.aboutSubtitle}</h3>
          <p className="game-window__about-text">{game.aboutText}</p>

          {/* Геймплей — только в левой колонке */}
          <div className="game-window__video">
            <img src={game.gameplayImage} alt="gameplay" />
            <div className="game-window__video-timer">{game.gameplayTimer}</div>
          </div>

          {showMore && (
            <>
              <h3 className="game-window__about-subtitle">{game.aboutSubtitle}</h3>
              <p className="game-window__about-text">{game.aboutText}</p>
            </>
          )}

          <button className="game-window__show-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less ▲" : "Show more ▼"}
          </button>
        </div>

        {/* Правая колонка — рейтинг */}
        <div className="game-window__about-right">
          <div className="game-window__rating">
            <div className="game-window__rating-badge">{game.ageRating}</div>
            <span className="game-window__rating-text">{game.ageRatingText}</span>
          </div>
        </div>

      </div>

      {/* ===== СИСТЕМНЫЕ ТРЕБОВАНИЯ ===== */}
      <h2 className="game-window__sysreq-title">System Requirements</h2>
      <div className="game-window__sysreq-grid">
        {["minimum", "recommended"].map((type) => (
          <div key={type}>
            <p className="game-window__sysreq-col-title">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </p>
            {Object.entries(game.sysreq[type]).map(([key, val]) => (
              <div key={key} className="game-window__sysreq-row">
                <span>{key}:</span>
                <span>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}