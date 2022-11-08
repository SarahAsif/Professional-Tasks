import React from "react";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import Divider from "@mui/material/Divider";
import Football1 from "../images/football1.png";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import { IsDesktopWidth } from "../utils";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const First = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();

  return (
    <div className="leading-10 p-14">
      <div
        className={clsx(
          "flex flex-row justify-around",
          mobileWidth && "flex-col",
          desktopSmallWidth && "gap-10",
          desktopWidth && "gap-10",
          tabletWidth && "gap-10"
        )}
      >
        <div className={clsx("flex flex-col gap-10", desktopSmallWidth && "")}>
          <div className={clsx("font-bold text-orange-400", mobileWidth && "")}>
            Last article
          </div>
          <div className={clsx("", mobileWidth && "")}>
            <img src={Football1} className={clsx("", mobileWidth && "")} />
          </div>
          <div className={clsx("max-w-xl ", mobileWidth && "")}>
            <Link to="/article">
              <div className="font-bold text-4xl my-3">
                The best games in this year
              </div>
            </Link>
            <div className="text-zinc-800">
              Get ready for create awesome football game, climb the highest rank
              in your city. Reach the top level by playing the games and be a
              superstar!
            </div>
          </div>
        </div>
        <div className={clsx("max-w-md", mobileWidth && "")}>
          <div className="font-bold text-orange-400">Most Popular Articles</div>
          <div
            className={clsx("flex flex-row items-center", mobileWidth && "")}
          >
            <div className={clsx("flex flex-col mt-5", mobileWidth && "")}>
              <Link to="/article">
                <div className="font-bold">The best games in this year.</div>
              </Link>
              <div className="text-zinc-800">
                Get ready for create awesome football game, climb the highest
                rank
              </div>
            </div>
            <div className="w-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                  fill="darkorange"
                />
              </svg>
            </div>
          </div>
          <Divider light />
          <div
            className={clsx("flex flex-row items-center", mobileWidth && "")}
          >
            <div className={clsx("flex flex-col", mobileWidth && "")}>
              <Link to="/article">
                <div className="font-bold">The best games in this year.</div>
              </Link>
              <div className="text-zinc-800">
                Get ready for create awesome football game, climb the highest
                rank{" "}
              </div>
            </div>{" "}
            <div className="w-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                  fill="darkorange"
                />
              </svg>
            </div>
          </div>
          <Divider light />
          <div
            className={clsx("flex flex-row items-center", mobileWidth && "")}
          >
            <div className={clsx("flex flex-col", mobileWidth && "")}>
              <Link to="/article">
                <div className="font-bold">The best games in this year.</div>
              </Link>
              <div className="text-zinc-800">
                Get ready for create awesome football game, climb the highest
                rank{" "}
              </div>
            </div>{" "}
            <div className="w-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                  fill="darkorange"
                />
              </svg>
            </div>
          </div>
          <Divider light />
          <div
            className={clsx("flex flex-row items-center ", mobileWidth && "")}
          >
            <div className={clsx("flex flex-col", mobileWidth && "")}>
              <Link to="/article">
                <div className="font-bold">The best games in this year.</div>
              </Link>
              <div className="text-zinc-800">
                Get ready for create awesome football game, climb the highest
                rank{" "}
              </div>
            </div>{" "}
            <div className="w-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                  fill="darkorange"
                />
              </svg>
            </div>
          </div>
          <Divider light />
        </div>
      </div>
    </div>
  );
};

export default First;
