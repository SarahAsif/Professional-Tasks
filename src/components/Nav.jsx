import Logo from "../images/logo.png";
import "../App.css";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Link, useParams, useNavigate } from "react-router-dom";

function Nav() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  return (
    <>
      {!mobileWidth && (
        <nav
          className={clsx(
            "flex flex-row  text-zinc-800  py-7 px-40 w-100  items-center",
            mobileWidth && "px-0 text-center ",
            tabletWidth && "px-20"
          )}
        >
          <div className={clsx("uppercase flex flex-row", mobileWidth && "")}>
            <div>
              <img src={Logo} className="w-7 h-10" />
            </div>
            <div>
              <Link
                to={"/"}
                className="text-3xl no-underline text-black mr-8 font-bold"
              >
                Iminn
              </Link>
            </div>
          </div>
          <div
            className={clsx(
              "grid grid-flow-col gap-9 list font-semibold",
              mobileWidth && "visibility: hidden"
            )}
          >
            <Link
              to="/"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Blog
            </Link>
            {/* <Link
              href="/blog"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Blog
            </Link> */}
            <Link
              to="/Contact"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
      {mobileWidth && <ResponsiveDrawer />}
    </>
  );
}
export default Nav;
