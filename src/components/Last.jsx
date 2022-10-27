import React from "react";
import "../App.css";
import Phone from "../images/phone.png";
import Button from "@mui/material/Button";
import TrendingFlat from "@mui/icons-material/TrendingFlat";
const Last = () => {
  return (
    <>
      {" "}
      <div className="bg_last px-36 leading-normal">
        <div className="flex flex-row gap-20 ">
          <div className="z-30">
            <img src={Phone} />
          </div>
          <div className="space-y-7 flex flex-col justify-center z-30">
            <div className="leading-normal text-5xl max-w-lg">
              Don't miss the launch of our application
            </div>
            <div className="flex flex-row space-x-10">
              <div>
                <input type="text" placeholder="Leave Your Email" />
              </div>
              <div>
                <Button
                  variant="contained"
                  endIcon={<TrendingFlat />}
                  color="warning"
                >
                  Send Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="curyBackground">
          <svg
            id="curve1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1386.02 139.54"
          >
            <path
              class="cls-1"
              d="M-10,150.08S225.44,35,466.3,80.18,1097.48,207.06,1371.68,121l4.3,88.18H-10Z"
              transform="translate(10.04 -69.90)"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Last;
