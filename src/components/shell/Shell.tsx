import CloseIcon from '@mui/icons-material/Close';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function Shell() {
  return (
    <div className="w-full max-w-2xl rounded-lg  pb-2 text-gv-fg3 shadow-lg">
      <div className="flex justify-between rounded-tl-lg rounded-tr-lg bg-gv-bg0h p-2 text-center text-gv-bg4">
        <div className="flex w-1/3 items-center justify-start px-1">
          <CloseIcon
            className="hover:bold mr-3 h-4 w-4 cursor-pointer
            transition-all duration-300 hover:text-gv-orange1"
          />
          <CropSquareIcon
            className="hover:bold h-4 w-4 cursor-pointer
            transition-all duration-300 hover:text-gv-aqua1"
          />
        </div>
        <div className="w-1/3">Terminal</div>
        <div className="flex w-1/3 items-center justify-end px-1">
          <SearchIcon
            className="hover:bold mr-4 h-4 w-4 cursor-pointer
            transition-all duration-300 hover:text-gv-aqua1"
          />
          <MenuIcon
            className="hover:bold mr-1 h-4 w-4 cursor-pointer
            transition-all duration-300 hover:text-gv-aqua1"
          />
        </div>
      </div>

      <div className="rounded-bl-lg rounded-br-lg bg-gv-bg0 p-3">
        <div>
          <div className="flex flex-col md:flex-row">
            <div>
              <span className="text-gv-green2">skb@bel</span> :{' '}
              <span className="text-gv-purple1">/home</span>{' '}
              <span className="text-gv-aqua1">[master]</span>
            </div>
            <span className="md:ml-2">$ whoami</span>
          </div>
          <p>smallkirby</p>
        </div>

        <div className="mt-2">
          <div className="flex flex-col md:flex-row">
            <div>
              <span className="text-gv-green2">skb@bel</span> :{' '}
              <span className="text-gv-purple1">/home</span>{' '}
              <span className="text-gv-aqua1">[master]</span>
            </div>
            <span className="md:ml-2">$ ls ~/Documents | grep secrets</span>
          </div>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="text-gv-aqua1">
                  <a href="/">Home</a>
                </td>
                <td className="">: this page</td>
              </tr>
              <tr>
                <td className="text-gv-aqua1">
                  <a href="/about">About</a>
                </td>
                <td className="">: basic information of smallkirby</td>
              </tr>
              <tr>
                <td className="text-gv-aqua1">
                  <a href="/activity">Activity</a>
                </td>
                <td className="">: history and writings of smallkirby</td>
              </tr>
              <tr>
                <td className="text-gv-aqua1">
                  <a href="/link">Links</a>
                </td>
                <td className="">: list of links</td>
              </tr>
              <tr>
                <td className="text-gv-aqua1">
                  <a href="/sites">Sites</a>
                </td>
                <td className="">: list of smallkirby&apos;s web sites</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2">
          <div className="flex flex-col md:flex-row">
            <div>
              <span className="text-gv-green2">skb@bel</span> :{' '}
              <span className="text-gv-purple1">/home</span>{' '}
              <span className="text-gv-aqua1">[master]</span>
            </div>
            <span className="md:ml-2">$ help</span>
          </div>
          <p>
            <a
              href="https://github.com/smallkirby/inu.smallkirby.com"
              target="_blank"
              className="underline hover:text-gv-aqua2"
            >
              Improve this page at GitHub.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
