import React from "react";
import "../App.css";
import User1 from "../images/user1.png";
import User2 from "../images/user2.png";
import Button from "@mui/material/Button";
import styled from "styled-components";

import Star from "../images/star.png";

const Chart = () => {
  return (
    <div className="bg_chart pt-52">
      <div className="px-40 pt-20 flex flex-row space-x-20">
        <div className="max-w-lg">
          <h1 className="font-semibold text-5xl leading-normal">
            Rank the Chart and Become the{" "}
            <span className="football">Best in Your City</span>
          </h1>
        </div>
        <div className="flex space-x-20 flex-row ">
          <div className=" bg-white shadow-xl w-80 h-96 p-7 rounded-xl flex flex-col space-y-7">
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
          <div className="py-20">
            <div className=" bg-white shadow-xl w-80 h-96 p-7  rounded-xl flex flex-col space-y-7">
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
