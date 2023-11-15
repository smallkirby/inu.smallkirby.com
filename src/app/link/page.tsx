import CloudIcon from '@mui/icons-material/Cloud';
import Image from 'next/image';

export default function LinkPage() {
  return (
    <div>
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Service</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>GitHub</td>
            <td>
              <a
                href="https://github.com/smallkirby"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                smallkirby
              </a>
            </td>
          </tr>
          <tr className="hover">
            <td>GitLab</td>
            <td>
              <a
                href="https://gitlab.com/smallkirby"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                smallkirby
              </a>
            </td>
          </tr>

          <tr className="hover">
            <td>Twitter / X</td>
            <td>
              <a
                href="https://twitter.com/smallkirby"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                @smallkirby
              </a>
            </td>
          </tr>
          <tr className="hover">
            <td>Bluesky</td>
            <td>
              <a
                href="https://bsky.app/profile/smallkirby.bsky.social"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                @smallkirby.bsky.social
              </a>
            </td>
          </tr>
          <tr className="hover">
            <td>Misskey</td>
            <td>
              <a
                href="https://misskey.io/@smallkirby"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                @smallkirby@misskey.io
              </a>
            </td>
          </tr>

          <tr className="hover">
            <td>Hatena</td>
            <td>
              <a
                href="https://profile.hatena.ne.jp/smallkirby/"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                id:smallkirby
              </a>
            </td>
          </tr>
          <tr className="hover">
            <td>Qiita</td>
            <td>
              <a
                href="https://qiita.com/smallkirby"
                target="_blank"
                className="text-gv-aqua1 underline"
              >
                @smallkirby
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
