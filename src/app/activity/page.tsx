import { MenuBook } from '@mui/icons-material';

function NormalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={'text-gv-blue2 underline ' + className}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Activity() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-gv-orange2">
        <MenuBook className="mr-2 pb-1 text-5xl text-gv-orange1" />
        Activity
      </h1>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-4xl font-bold text-gv-aqua2">
          <span className="rounded-md">🎓</span>
          Education
        </h2>
        <div className="table table-lg mt-4">
          <thead>
            <tr>
              <th className="w-8">Year</th>
              <th className="w-4">Month</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2022</td>
              <td>04</td>
              <td>
                Enrolled in Master&apos;s program in
                <NormalLink
                  href="https://www.i.u-tokyo.ac.jp/index_e.shtml"
                  className="ml-2"
                >
                  Graduate School of Information Science and Technology, The
                  University of Tokyo.
                </NormalLink>
              </td>
            </tr>
            <tr className="hover">
              <td>2022</td>
              <td>03</td>
              <td>
                Graduated from Bachelor&apos;s program in
                <NormalLink
                  href="https://www.ee.t.u-tokyo.ac.jp/en/"
                  className="ml-2"
                >
                  department of Electrical and Electronic Engineering, The
                  University of Tokyo.
                </NormalLink>
              </td>
            </tr>
            <tr className="hover">
              <td>2020</td>
              <td>04</td>
              <td>
                Enrolled in Bachelor&apos;s program in
                <NormalLink
                  href="https://www.ee.t.u-tokyo.ac.jp/en/"
                  className="ml-2"
                >
                  department of Electrical and Electronic Engineering, The
                  University of Tokyo.
                </NormalLink>
              </td>
            </tr>
            <tr className="hover">
              <td>2020</td>
              <td>03</td>
              <td>
                Graduated from
                <NormalLink
                  href="https://www.u-tokyo.ac.jp/en/academics/cas.html"
                  className="ml-2"
                >
                  College of Arts and Sciences (Junior Division, Natural
                  Sciences I), The University of Tokyo.
                </NormalLink>
              </td>
            </tr>
            <tr className="hover">
              <td>2018</td>
              <td>04</td>
              <td>
                Enrolled in
                <NormalLink
                  href="https://www.u-tokyo.ac.jp/en/academics/cas.html"
                  className="ml-2"
                >
                  College of Arts and Sciences (Junior Division, Natural
                  Sciences I), The University of Tokyo.
                </NormalLink>
              </td>
            </tr>
            <tr className="hover">
              <td>2017</td>
              <td>03</td>
              <td>Graduated from Asaka High School, Fukushima Prefecture.</td>
            </tr>
          </tbody>
        </div>
      </div>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-4xl font-bold text-gv-aqua2">
          <span className="rounded-md">🧪</span>
          Research
        </h2>
        <div className="table table-lg mt-4">
          <thead>
            <tr>
              <th className="w-20">Year</th>
              <th className="w-20">Month</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2023</td>
              <td>08</td>
              <td>
                <p>
                  <NormalLink href="https://sites.google.com/site/swoppweb/">
                    SWoPP 2023 @ Hokkaido, Japan.
                  </NormalLink>
                </p>
                <p>
                  <NormalLink href="https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_uri&item_id=227151">
                    Leasing of Heap Pointers to Prevent Use-After-Free
                  </NormalLink>
                </p>
                <p className="text-sm">
                  Wataru Hashimoto (The University of Tokyo), Takahiro Shinagawa
                  (The University of Tokyo).
                </p>
              </td>
            </tr>
            <tr className="hover">
              <td>2023</td>
              <td>05</td>
              <td>
                <p>
                  <NormalLink href="https://2023.eurosys.org/index.html">
                    EuroSys 2023 @ Rome, Italy.
                  </NormalLink>
                  Poster Presentation.
                </p>
                <p>
                  <NormalLink href="https://2023.eurosys.org/docs/posters/eurosys23posters-final31.pdf">
                    Toward Pointer Leasing for Use-After-Free Prevention
                  </NormalLink>
                </p>
                <p className="text-sm">
                  Wataru Hashimoto (The University of Tokyo), Takahiro Shinagawa
                  (The University of Tokyo).
                </p>
              </td>
            </tr>
          </tbody>
        </div>
      </div>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-4xl font-bold text-gv-aqua2">
          <span className="rounded-md">👩‍💻</span>
          Internship
        </h2>
        <div className="table table-lg mt-4">
          <thead>
            <tr>
              <th className="w-20">Period</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2023.03</td>
              <td>
                One month internship at
                <NormalLink
                  href="https://www.toyota-tokyo.tech/en/"
                  className="ml-2"
                >
                  Toyota Otemachi
                </NormalLink>
                ,
                <NormalLink
                  href="https://global.toyota/en/"
                  className="ml-2 mr-2"
                >
                  Toyota Motor Corporation.
                </NormalLink>
                Development.
              </td>
            </tr>
            <tr className="hover">
              <td>2022.09-2022.11</td>
              <td>
                Three months internship at
                <NormalLink
                  href="https://about.mercari.com/"
                  className="ml-2 mr-2"
                >
                  Mercari, Inc.
                </NormalLink>
                . Security.
              </td>
            </tr>
            <tr className="hover">
              <td>2022.08</td>
              <td>
                Three weeks internship at
                <NormalLink href="https://hatena.co.jp/" className="ml-2 mr-2">
                  Hatena Co., Ltd.
                </NormalLink>
                . Development of
                <NormalLink href="https://hatenablog.com/" className="ml-2">
                  Hatena Blog
                </NormalLink>
                .
              </td>
            </tr>
            <tr className="hover">
              <td>2021-2022</td>
              <td className="opacity-40">
                Internship at
                <NormalLink
                  href="https://www.iijlab.net/"
                  className="ml-2 mr-2"
                >
                  Internet Initiative Japan Research Laboratory
                </NormalLink>
                . Linux Kernel Library. I did almost nothing.
              </td>
            </tr>
            <tr className="hover">
              <td>2020.01-Current</td>
              <td>
                Part-time job at
                <NormalLink href="" className="ml-2 mr-2">
                  ***** Security
                </NormalLink>
                . Development and ***********.
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
}
