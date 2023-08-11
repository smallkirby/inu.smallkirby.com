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
      <div className="mt-4">
        <h2 className="card-title text-3xl font-bold text-gv-aqua2">
          <span className="rounded-md">🎓</span>
          Education
        </h2>
        <table className="table table-lg mt-4">
          <thead>
            <tr>
              <th>Date</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2022.04</td>
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
              <td>2022.03</td>
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
              <td>2020.04</td>
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
              <td>2020.03</td>
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
              <td>2018.04</td>
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
              <td>2017.03</td>
              <td>Graduated from Asaka High School, Fukushima Prefecture.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-3xl font-bold text-gv-aqua2">
          <span className="rounded-md">🧪</span>
          Research
        </h2>
        <table className="table table-lg mt-4">
          <thead>
            <tr>
              <th>Date</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2023.08</td>
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
              <td>2023.05</td>
              <td>
                <p>
                  <NormalLink
                    href="https://2023.eurosys.org/index.html"
                    className="mr-2"
                  >
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
        </table>
      </div>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-3xl font-bold text-gv-aqua2">
          <span className="rounded-md">👩‍💻</span>
          Internship
        </h2>
        <table className="table table-lg mt-4">
          <thead>
            <tr>
              <th>Period</th>
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
                <NormalLink href="https://about.mercari.com/" className="ml-2">
                  Mercari, Inc.
                </NormalLink>
                . Security.
              </td>
            </tr>
            <tr className="hover">
              <td>2022.08</td>
              <td>
                Three weeks internship at
                <NormalLink href="https://hatena.co.jp/" className="ml-2">
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
        </table>
      </div>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-3xl font-bold text-gv-aqua2">
          <span className="rounded-md">🔐</span>
          Security
        </h2>
        <table className="table table-lg mt-4">
          <thead>
            <tr>
              <th className="w-20">Date</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2023.08</td>
              <td>
                <p>
                  <NormalLink
                    href="https://www.ipa.go.jp/jinzai/security-camp/2023/zenkoku/index.html"
                    className="mr-2"
                  >
                    IPAセキュリティ・キャンプ全国大会2023.
                  </NormalLink>
                  C2講師
                  <NormalLink
                    href="https://www.ipa.go.jp/jinzai/security-camp/2023/zenkoku/program_list_cd.html"
                    className="ml-2"
                  >
                    (手を動かして理解するLinux Kernel Exploit)
                  </NormalLink>
                </p>
                <p>
                  <NormalLink href="https://github.com/smallkirby/seccamp23c2-assets">
                    Assets & Slides.
                  </NormalLink>
                </p>
              </td>
            </tr>
            <tr className="hover">
              <td>2021.10</td>
              <td>
                <p>
                  <NormalLink href="https://ctf.tsg.ne.jp/" className="mr-2">
                    TSG CTF 2021.
                  </NormalLink>
                  Challenge Author (pwn).
                </p>
              </td>
            </tr>
            <tr className="hover">
              <td>2020.10</td>
              <td>
                <p>
                  <NormalLink href="https://ctf.tsg.ne.jp/" className="mr-2">
                    TSG CTF 2020.
                  </NormalLink>
                  Challenge Author (pwn).
                </p>
              </td>
            </tr>
            <tr className="hover">
              <td>2019.08</td>
              <td>
                <p>
                  <NormalLink href="https://codeblue.jp/2019/" className="mr-2">
                    CODE BLUE 2019 @ TOKYO.
                  </NormalLink>
                  Student Staff.
                </p>
              </td>
            </tr>
            <tr className="hover">
              <td>2019.08</td>
              <td>
                <p>
                  <NormalLink
                    href="https://www.ipa.go.jp/jinzai/security-camp/2023/zenkoku/index.html"
                    className="mr-2"
                  >
                    IPAセキュリティ・キャンプ全国大会2019.
                  </NormalLink>
                  Zトラック修了
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="mt-16">
        <h2 className="card-title text-3xl font-bold text-gv-aqua2">
          <span className="rounded-md">✍️</span>
          Writings
        </h2>
        <table className="table table-lg mt-4">
          <thead>
            <tr>
              <th className="w-20">Date</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>2022.11</td>
              <td>
                <p>
                  <NormalLink
                    href="https://engineering.mercari.com/en/blog/entry/20221215-supplychain-security-reevaluation/"
                    className="mr-2"
                  >
                    Supply-Chain Security: Evaluation of Threats and
                    Mitigations.
                  </NormalLink>
                </p>
                <p>Mercari Engineering Blog.</p>
              </td>
            </tr>
            <tr className="hover">
              <td>2022.10</td>
              <td>
                <p>
                  <NormalLink
                    href="https://blog.flatt.tech/entry/grpc-web_dogfooding"
                    className="mr-2"
                  >
                    セキュリティ企業における開発とドッグフーディング -
                    gRPC-web採用プロダクトの脆弱性診断を効率的に行えるようになるまで
                  </NormalLink>
                </p>
                <p>Flatt Security Blog.</p>
              </td>
            </tr>
            <tr className="hover">
              <td>2022.3</td>
              <td>
                <p>
                  <NormalLink
                    href="https://blog.flatt.tech/entry/ble_security"
                    className="mr-2"
                  >
                    Bluetooth通信実装のセキュリティ観点を4ステップ + 1で理解する
                  </NormalLink>
                </p>
                <p>Flatt Security Blog.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
