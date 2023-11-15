import type { Game } from '@/data/game';
import { games } from '@/data/game';
import { Favorite, Grade } from '@mui/icons-material';

function GameRow({ game }: { game: Game }) {
  return (
    <tr className="hover">
      <td>
        {game.link ? (
          <a
            href={game.link}
            target="_blank"
            className="text-gv-aqua1 underline"
          >
            {game.title}
          </a>
        ) : (
          <span className="text-gv-aqua1">{game.title}</span>
        )}
      </td>
      <td>{game.platform}</td>
      <td>{game.clear ? 'o' : ''}</td>
      <td>
        {game.fav === 'o' ? (
          <Favorite className="text-md text-gv-yellow1" />
        ) : game.fav === '!' ? (
          <Grade className="text-gv-orange2" />
        ) : (
          <span />
        )}
      </td>
      <td>{game.date}</td>
    </tr>
  );
}

export default function GamePage() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Title</th>
            <th>Platform</th>
            <th>Clear</th>
            <th>Fav</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {games.map((game) => (
            <GameRow key={game.title} game={game} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
