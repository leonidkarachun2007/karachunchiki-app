import './GameCard.css';
import { Link } from 'react-router-dom';

function GameCard({game}) {
  return (
    <Link className='card' to='/game'>
      <img src={game.image} alt={game.title} />
      <span className='type'>Base Game</span>
      <h3>{game.title}</h3>

      <p className='price'>
        {game.price === 0 ? "Free" :  `UAH ${game.price}`}
      </p>
    </Link>
  );
}

export default GameCard;
