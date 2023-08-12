import CloudIcon from '@mui/icons-material/Cloud';
import LinkCard from './LinkCard';

function Cards({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-wrap p-2 md:flex-row">{children}</div>
  );
}

export default function LinkPage() {
  return (
    <div>
      <div>
        <div className="mb-1 border-b-[1px] border-gv-bg2 pb-4">
          <h2 className="text-3xl font-bold text-gv-fg3">
            <span className="mr-3 rounded-md">🖥️</span>
            Tech
          </h2>
        </div>
        <Cards>
          <LinkCard
            title="GitHub"
            href="https://github.com/smallkirby"
            account="smallkirby"
            img="/brands/github-mark-white.png"
          />
        </Cards>
      </div>

      <div className="mt-8">
        <div className="mb-1 border-b-[1px] border-gv-bg2 pb-4">
          <h2 className="text-3xl font-bold text-gv-fg3">
            <span className="mr-3 rounded-md">🌎</span>
            SNS
          </h2>
        </div>
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
            img={<CloudIcon className="text-3xl text-gv-blue1" />}
          />
          <LinkCard
            title="Misskey"
            href="https://misskey.io/@smallkirby"
            account="@smallkirby@misskey.io"
            img="/brands/misskey.png"
          />
        </Cards>
      </div>
    </div>
  );
}
