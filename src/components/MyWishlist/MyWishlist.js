import './MyWishlist.css';
import { useState } from 'react';
import { BsWindows } from "react-icons/bs";
import { FaApple } from 'react-icons/fa';

export function MyWishlist() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="page-wrapper">
      <div className="cart-header">
        <h1>My Wishlist</h1>
        <div className="total-badge">UAH 0.00</div>
      </div>
      <div className="notify-banner">
        <div className="notify-accent" />
        <div className="notify-content">
          <span>Get notified when your wishlisted games go on sale, or are available for purchase or pre-purchase.</span>
        </div>
        <div className={`notify-toggle ${isOn ? 'on' : ''}`} onClick={() => setIsOn(!isOn)}>
          <div className="notify-toggle-thumb" />
        </div>
      </div>
      <div className="cart-layout">

        <div className="cart-left">
          <div className="game-card">
            <div className="image-container">
              <img src="sun.jpg" alt="The End of the Sun cover" />
            </div>

            <div className="game-info">
              <span className="game-type">Base Game</span>
              <h2 className="game-name">The End of the Sun</h2>

              <div className="stats-container">
                <div className="stat-row">
                  <span>All Reviews:</span>
                  <span className="review-status">Mostly Positive</span>
                </div>
                <div className="stat-row">
                  <span>Release Date</span>
                  <span>20.05.2025</span>
                </div>
              </div>

              <div className="platform-icons">
                <div className="platform-item">
                  <BsWindows />
                </div>
                <div className="platform-item">
                  <span>MAC</span>
                </div>
              </div>
            </div>

            <div className="game-actions">
              <div className="price">UAH 0.00</div>
              <div className="buttons">
                <button className="btn-remove">Remove</button>
                <button className="btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWishlist;