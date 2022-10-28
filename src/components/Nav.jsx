import Logo from "../images/logo.png";
import Logoimg from "../images/sidelogo.png";
import "../App.css";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";

function Nav() {
  const mobileWidth = IsMobileWidth();

  return (
    <>
      <nav
        className={clsx(
          "flex flex-row  text-zinc-800  py-7 px-40 w-100  items-center",
          mobileWidth && "px-0 text-center"
        )}
      >
        <div className={clsx("uppercase flex flex-row", mobileWidth && "")}>
          <div>
            <img src={Logo} className="w-7 h-10" />
          </div>
          <div>
            <a
              href="/home"
              className=" text-3xl no-underline text-black hover:text-blue-dark mr-8 font-bold"
            >
              Iminn
            </a>
          </div>
        </div>
        <div
          className={clsx(
            "grid grid-flow-col gap-9 list font-semibold",
            mobileWidth && "visibility: hidden"
          )}
        >
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
