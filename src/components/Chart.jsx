import React from "react";
import "../App.css";
import User1 from "../images/user1.png";
import User2 from "../images/user2.png";
import styled from "styled-components";
import Star from "../images/star.png";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import { IsDesktopWidth } from "../utils";

const Chart = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();

  return (
    <div className={clsx("pt-52", mobileWidth && "pt-5 text-center")}>
      <div
        className={clsx(
          "px-40 pt-20 flex flex-row gap-5",
          desktopWidth && "pt-5 flex flex-col text-center items-center",
          (tabletWidth || desktopSmallWidth || mobileWidth) &&
            "flex flex-col items-center text-center"
        )}
      >
        <div className="max-w-xl">
          <h1
            className={clsx(
              "font-semibold text-5xl leading-normal",
              (tabletWidth || desktopSmallWidth || desktopWidth) &&
                "text-5xl text-center "
            )}
          >
            Rank the Chart and Become the
            <span className="football p-2">Best in Your City</span>
          </h1>
        </div>
        <div>
          <div className=" bg-white shadow-xl w-96 h-96 p-7 rounded-xl flex flex-col space-y-7">
            <div className="font-bold flex flex-row space-x-5 items-center">
              <div className="text-orange-400 text-3xl">1</div>
              <div>
                <img src={User1} />
              </div>
              <div>Marcus Herwitz</div>
            </div>
            <div className="leading-10">
              <div className="flex flex-row justify-between">
                <div className="text-orange-400">Games Played</div>
                <div className="flex flex-row ">
                  <div className="font-bold">148</div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-orange-400">Average Ratings</div>
                <div className="font-bold flex flex-row items-center gap-2">
                  <img src={Star} className="w-4 h-4" />
                  <div>4.8</div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-orange-400">Credits</div>
                <div className="font-bold">1.482</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-orange-400">Level</div>
                <div className="font-bold">
                  <Buttons>
                    <button>God</button>
                  </Buttons>{" "}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-orange-400">Role</div>
                <div className="font-bold">Striker</div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-orange-400">Age</div>
                <div className="font-bold">23</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-20">
            <div className=" bg-white shadow-xl w-96 h-96 p-7  rounded-xl flex flex-col space-y-7 ">
              <div className="font-bold flex flex-row space-x-5 items-center">
                <div className="text-orange-400 text-3xl">2</div>
                <div>
                  <img src={User2} />
                </div>
                <div>James Kenter</div>
              </div>
              <div className="leading-10">
                <div className="flex flex-row justify-between">
                  <div className="text-orange-400">Games Played</div>
                  <div className="flex flex-row ">
                    <div className="font-bold">148</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-orange-400">Average Ratings</div>
                  <div className="font-bold flex flex-row items-center gap-2">
                    <img src={Star} className="w-4 h-4" />
                    <div>4.8</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-orange-400">Credits</div>
                  <div className="font-bold">1.482</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-orange-400">Level</div>
                  <div className="font-bold">
                    <Buttons>
                      <button>God</button>
                    </Buttons>{" "}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-orange-400">Role</div>
                  <div className="font-bold">Striker</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-orange-400">Age</div>
                  <div className="font-bold">23</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Buttons = styled.button`
  background: #e9f7f5;
  border-radius: 25px;
  width: 120px;
  height: 45px;
  margin-right: -10px;
`;

export default Chart;
