import Logo from "../images/logo.png";
import Logoimg from "../images/sidelogo.png";
import "../App.css";

function Nav() {
  return (
    <>
      <img src={Logoimg} className="absolute" />

      <nav className="flex flex-row  text-zinc-800 py-7 px-40 w-full items-baseline">
        <div className="mb-2 sm:mb-0 uppercase">
          <img src={Logo} className="logo" />
          <a
            href="/home"
            className="  text-3xl no-underline text-black hover:text-blue-dark mr-8 font-bold"
          >
            Iminn
          </a>
        </div>
        <div className="grid grid-flow-col gap-9 list font-semibold">
          <a
            href="/one"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Home
          </a>
          <a
            href="/two"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            About
          </a>
          <a
            href="/three"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Blog
          </a>
          <a
            href="/three"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </>
  );
}
export default Nav;
