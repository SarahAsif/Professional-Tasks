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
import Drawer from "../images/drawer.png";

import MailIcon from "@mui/icons-material/Mail";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";

export default function SwipeableTemporaryDrawer() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
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
            <button>
              <img
                onClick={toggleDrawer("left", true)}
                src={Drawer}
                className="drawer"
              />
            </button>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
          </div>
        </div>
      </nav>
    </div>
  );
}
