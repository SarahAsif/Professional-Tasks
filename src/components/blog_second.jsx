import React from "react";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import Football2 from "../images/football2.png";
import Football3 from "../images/football3.png";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import { IsDesktopWidth } from "../utils";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();
  const navigate = useNavigate();

  return (
    <div className="p-14 leading-loose">
      <div
        className={clsx(
          "font-bold text-orange-400",
          mobileWidth && "text-center"
        )}
      >
        Weekly Articles
      </div>
      <div
        className={clsx(
          "flex flex-row ",
          mobileWidth && "flex-col text-center"
        )}
      >
        <div
          className={clsx(
            "flex flex-row items-center",
            mobileWidth && "flex-col text-center items-center"
          )}
        >
          <div className="m-2">
            <img src={Football2} className={clsx("", mobileWidth && "")} />
          </div>
          <div className={clsx("max-w-sm ", mobileWidth && "")}>
            <div className="font-bold">The best games in this year.</div>
            <div>11 January 2020</div>

            <div>
              Get ready for create awesome football game, climb the highest rank
              in your city.{" "}
            </div>
            <div className={clsx("w-10", mobileWidth && " visibility: hidden")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                  fill="darkorange"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-row  items-center ",
            mobileWidth && "flex-col text-center items-center"
          )}
        >
          <div className="m-2">
            <img src={Football3} className={clsx("", mobileWidth && "")} />
          </div>
          <div className={clsx("max-w-sm", mobileWidth && "")}>
            <div className="font-bold">The best games in this year.</div>
            <div>11 January 2020</div>

            <div>
              Get ready for create awesome football game, climb the highest rank
              in your city.{" "}
            </div>
            <div
              className={clsx(
                "w-10 items-center ",
                mobileWidth && "visibility: hidden"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"
                  fill="darkorange"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
