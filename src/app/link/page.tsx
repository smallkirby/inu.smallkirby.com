import CloudIcon from '@mui/icons-material/Cloud';
import Image from 'next/image';

export default function LinkPage() {
  return (
    <div>
      <table className="table table-lg">
        <thead>
          <tr>
            <th className="w-5 p-0"></th>
            <th>Service</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th className="m-0 w-5 p-0">
              <Image
                src="/brands/github-mark-white.png"
                width={25}
                height={25}
                alt="github"
              ></Image>
            </th>
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
            <th className="m-0 p-0">
              <Image
                src="/brands/gitlab-logo-500.png"
                width={25}
                height={25}
                alt="github"
              ></Image>
            </th>
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
            <th className="m-0 w-5 p-0">
              <Image
                src="/brands/x-logo-white.png"
                width={18}
                height={18}
                alt="github"
              ></Image>
            </th>
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
            <th className="m-0 p-0">
              <CloudIcon className="text-2xl text-gv-blue1" />
            </th>
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
            <th className="m-0 w-5 p-0">
              <Image
                src="/brands/misskey.png"
                width={22}
                height={22}
                alt="github"
              ></Image>
            </th>
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
            <th className="m-0 w-5 p-0">
              <Image
                className="bg-gv-fg1"
                src="/brands/hatenablog-logo.svg"
                width={22}
                height={22}
                alt="github"
              ></Image>
            </th>
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
            <th className="m-0 w-5 p-0">
              <Image
                src="/brands/qiita-logo.png"
                width={22}
                height={22}
                alt="github"
              ></Image>
            </th>
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
