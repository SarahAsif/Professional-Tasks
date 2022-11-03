import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Logo from "../images/logo.png";

import MailIcon from "@mui/icons-material/Mail";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";

export default function SwipeableTemporaryDrawer() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Blog", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <nav
        className={clsx(
          "flex flex-row  text-zinc-800  py-7 px-40 w-100  items-center",
          mobileWidth && "px-0 text-center items-center justify-between",
          tabletWidth && "px-20"
        )}
      >
        <div
          className={clsx("uppercase flex flex-row", mobileWidth && "ml-10")}
        >
          <div>
            <img src={Logo} className="w-7 h-10" />
          </div>
          <div>
            <a
              href="/home"
              className={clsx(
                " text-3xl no-underline text-black hover:text-blue-dark mr-8 font-bold"
              )}
            >
              Iminn
            </a>
          </div>
        </div>
        <div
          className={clsx(
            "font-semibold",
            mobileWidth && "visibility: visible"
          )}
        >
          <div>
            {" "}
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <button>
                  <svg
                    onClick={toggleDrawer(anchor, true)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                  </svg>
                  {anchor}
                </button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
