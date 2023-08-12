import CloudIcon from '@mui/icons-material/Cloud';
import LinkCard from './LinkCard';

function Cards({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-wrap p-2 md:flex-row">{children}</div>
  );
}

function Head({ title, emoji }: { title: string; emoji: string }) {
  return (
    <div className="mb-1 border-b-[1px] border-gv-bg2 pb-4">
      <h2 className="text-2xl font-bold text-gv-aqua2">
        <span className="mr-3 rounded-md">{emoji}</span>
        {title}
      </h2>
    </div>
  );
}

export default function LinkPage() {
  return (
    <div>
      <div>
        <Head title="Tech" emoji="🖥️" />
        <Cards>
          <LinkCard
            title="GitHub"
            href="https://github.com/smallkirby"
            account="smallkirby"
            img="/brands/github-mark-white.png"
          />
          <LinkCard
            title="GitLab"
            href="https://gitlab.com/smallkirby"
            account="smallkirby"
            img="/brands/gitlab-logo-500.png"
            width={60}
            height={60}
          />
        </Cards>
      </div>

      <div className="mt-8">
        <Head title="SNS" emoji="🌎" />
        <Cards>
          <LinkCard
            title="Twitter / X"
            href="https://twitter.com/smallkirby"
            account="@smallkirby"
            img="/brands/x-logo-white.png"
          />
          <LinkCard
            title="Bluesky"
            href="https://bsky.app/profile/smallkirby.bsky.social"
            account="@smallkirby.bsky.social"
            img={<CloudIcon className="text-4xl text-gv-blue1" />}
          />
          <LinkCard
            title="Misskey"
            href="https://misskey.io/@smallkirby"
            account="@smallkirby@misskey.io"
            img="/brands/misskey.png"
            width={60}
            height={60}
          />
        </Cards>
      </div>

      <div className="mt-8">
        <Head title="Blog" emoji="📝" />
        <Cards>
          <LinkCard
            title="Hatena"
            href="https://profile.hatena.ne.jp/smallkirby/"
            account="smallkirby"
            img="/brands/hatenablog-logo.svg"
            bg="bg-gv-fg1"
            width={60}
            height={60}
          />
          <LinkCard
            title="Qiita"
            href="https://qiita.com/smallkirby"
            account="@smallkirby"
            img="/brands/qiita-logo.png"
            width={80}
            height={80}
          />
        </Cards>
      </div>
    </div>
  );
}
