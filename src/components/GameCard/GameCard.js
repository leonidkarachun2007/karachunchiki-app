import './GameCard.css';

function GameCard({ game }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img src={game.image} width="150" alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.price}$</p>
    </div>
  );
}

export default GameCard;
