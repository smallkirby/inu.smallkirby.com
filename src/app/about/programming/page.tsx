import type { Language, Level } from '@/data/languages';
import { languages, webs, services } from '@/data/languages';
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
    <div className="overflow-x-auto">
      <div className="my-4">
        <h2 className="text-2xl font-bold text-gv-aqua2">Languages</h2>
        <table className="table table-md mt-4 w-full">
          <thead>
            <tr>
              <th className="w-1/3">Lang</th>
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

      <div className="my-8">
        <h2 className="text-2xl font-bold text-gv-aqua2">Web</h2>
        <table className="table table-md mt-4 w-full">
          <thead>
            <tr>
              <th className="w-1/3">Framework / Lib</th>
              <th>Proficiency</th>
              <th>Fav</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {webs
              .sort((a, b) =>
                a.since > b.since ? -1 : a.since < b.since ? 1 : 0
              )
              .map((language) => (
                <LanguageRow key={language.name} language={language} />
              ))}
          </tbody>
        </table>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold text-gv-aqua2">Services / Hosting</h2>
        <table className="table table-md mt-4 w-full">
          <thead>
            <tr>
              <th className="w-1/3">Services / Infra etc</th>
              <th>Proficiency</th>
              <th>Fav</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {services
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
