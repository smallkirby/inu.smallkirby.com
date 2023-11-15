import Image from 'next/image';
import type { SiteData } from '@/data/sites';
import { siteData } from '@/data/sites';

function SiteEntry({ site }: { site: SiteData }) {
  return (
    <tr className="hover">
      <td>
        <a href={site.url} target="_blank" className="text-gv-aqua1 underline">
          {site.title}
        </a>
      </td>
      <td>
        <a
          className="mx-auto h-8 p-0"
          href={site.source}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/brands/github.svg"
            width={20}
            height={20}
            alt="github"
          ></Image>
        </a>
      </td>
      <td>
        <p>{site.description}</p>
      </td>
    </tr>
  );
}

export default function Sites() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <thead>
          <tr>
            <th className="w-16">Site</th>
            <th className="w-8">Source</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {siteData.map((site) => (
            <SiteEntry key={site.title} site={site} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
