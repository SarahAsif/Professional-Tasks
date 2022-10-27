import React from "react";
import Small from "../images/small.png";
import Oragnesm from "../images/orangesm.png";
import Orangelg from "../images/orangebg.png";
import Map from "../images/map.png";
import Curve from "../images/curve.png";
import DP from "../images/dp.png";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Games = () => {
  return (
    <div className="text-zinc-800 pt-20">
      <div className="z-0">
        <img src={Small} className="absolute right-0 mr-20 mt-48" />
        <img src={Curve} className="absolute mt-40" />
        <img src={Orangelg} className="absolute right-0 mt-56" />{" "}
      </div>{" "}
      <div className="grid grid-flow-col gap-1 py-7 px-40 z-10">
        <img src={Oragnesm} className="absolute -mt-5 ml-80" />
        <img src={Map} className="z-10" />
        <div className="py-7 max-w-lg">
          <div className="grid grid-flow-row gap-6">
            <h1 className="text-5xl leading-normal">
              Find Games <span className="football ">Near You </span> Any Where
              Any Time
            </h1>
            <div className="px-16 text-base">
              Explore nearby game based on your current location
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Card className="w-2/5 h-48 ml-96 -mt-36 z-30 absolute ">
          <Paper round={true} variant="elevation24 z-40 ">
            <div className="grid grid-flow-col gap-1 p-7 ">
              <div>
                <img src={DP} />
              </div>
              <div className="leading-loose text-zinc-400">
                <div className="grid grid-flow-col gap-2 ">
                  <div className="text-lg font-bold text-zinc-800">
                    FCH vs FCB
                  </div>
                  <div className="text-neutral-500">3 km</div>
                </div>
                <div>Location: London</div>
                <div>Ground: Middlesex</div>
                <div className="grid grid-flow-col gap-2 ">
                  <div className="grid grid-flow-col">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5  mt-1"
                      >
                        <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                      </svg>
                    </div>
                    <div>4:00 pm</div>
                  </div>
                  <div className="grid grid-flow-col">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 mt-1"
                      >
                        <path d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z" />
                      </svg>
                    </div>
                    <div>5 Players</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-flow-col gap-2">
                <button>
                  <Button
                    sx={{ borderRadius: 28 }}
                    variant="contained"
                    color="warning"
                  >
                    Start Demo
                  </Button>
                </button>
              </div>
            </div>
          </Paper>
        </Card>
      </div>
    </div>
  );
};

export default Games;
