import { Favorite, Grade } from '@mui/icons-material';
import type { Game } from '@/data/game';
import { games } from '@/data/game';

function GameRow({ game }: { game: Game }) {
  return (
    <tr className="hover">
      <td>
        {game.link ? (
          <a
            href={game.link}
            target="_blank"
            className="text-gv-aqua1 underline"
            rel="noreferrer"
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
          <Favorite className="text-md text-gv-blue1" />
        ) : game.fav === '!' ? (
          <Grade className="text-gv-purple1" />
        ) : (
          <span />
        )}
      </td>
      <td className="text-xs">{game.play_period || ''}</td>
      <td className="text-xs">{game.play_hour || ''}</td>
    </tr>
  );
}

export default function GamePage() {
  return (
    <div className="overflow-x-auto">
      <div className="mb-2 text-sm text-gv-bg3">
        <span className="mr-2 font-bold">Legend:</span>
        <span className="mr-2">
          <Favorite className="text-xs text-gv-blue1" />
          =like
        </span>
        <span>
          <Grade className="text-xs text-gv-purple1" />
          =love
        </span>
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Platform</th>
            <th>Clear</th>
            <th>Fav</th>
            <th>Period</th>
            <th>Total</th>
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
