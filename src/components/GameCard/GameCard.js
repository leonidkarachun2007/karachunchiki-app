import './GameCard.css';

function GameCard({game}) {
  return (
    <div className='card'>
      <img src={game.image} alt={game.title} />
      <span className='type'>Base Game</span>
      <h3>{game.title}</h3>

      <p className='price'>
        {game.price === 0 ? "Free" :  `UAH ${game.price}`}
      </p>
    </div>
  );
}

export default GameCard;
