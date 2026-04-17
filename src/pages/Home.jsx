import games from "../data/games";
import GameCard from "../components/GameCard/GameCard";

function Home() {
  return (
    <div>
      <h2>Магазин</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;
