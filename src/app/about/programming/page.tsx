import type { Language, Level } from '@/data/languages';
import { languages } from '@/data/languages';
import { Favorite, Grade, ThumbDownAlt } from '@mui/icons-material';

const getIcon = (lv: Level) => {
  if (lv === 'o') {
    return <Favorite className="text-md text-gv-aqua1" />;
  } else if (lv === '!') {
    return <Grade className="text-md text-gv-purple1" />;
  } else if (lv === 'x') {
    return <ThumbDownAlt className="text-md text-gv-red1" />;
  } else {
    return <span />;
  }
};

function LanguageRow({ language }: { language: Language }) {
  return (
    <tr className="hover">
      <td>
        <span>{language.name}</span>
      </td>
      <td>{getIcon(language.proficiency)}</td>
      <td>{getIcon(language.fav)}</td>
      <td>{language.since}</td>
    </tr>
  );
}

export default function ProgrammingPage() {
  return (
    <div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gv-aqua2">Languages</h2>
        <table className="table table-lg mt-4">
          <thead>
            <tr>
              <th>Lang</th>
              <th>Proficiency</th>
              <th>Fav</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {languages
              .sort((a, b) =>
                a.since > b.since ? -1 : a.since < b.since ? 1 : 0
              )
              .map((language) => (
                <LanguageRow key={language.name} language={language} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
