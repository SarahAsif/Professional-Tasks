import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Button from "@mui/material/Button";
import User1 from "../images/user1.png";
import User2 from "../images/user2.png";
import User3 from "../images/user3.png";
import User4 from "../images/user4.png";
import Star from "../images/star.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Rate = () => {
  return (
    <div>
      <div className="pt-60 pb-40 text-center">
        <h1 className="font-semibold text-5xl mb-8">
          Rate <span className="football ">Players</span> and Win{" "}
          <span className="football">Man of the Match</span>
        </h1>
      </div>
      <div className="swipper">
        <div className="px-9">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="flex flex-col ">
                <div className="w-30 h-20 bg-white shadow-md grid grid-flow-col justify-between rounded-lg items-center px-6">
                  <div className="flex flex-row items-center gap-3">
                    <img src={User1} className="w-13" />
                    <div className="text-zinc-800 font-bold">
                      Alfredo Rhielden
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 text-orange-400">
                    <div>Rate</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5"
                      fill="orange"
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="h-64 mt-4 shadow-lg bg-white grid grid-flow-row gap-2 rounded-lg items-center p-2">
                    <div className="flex flex-row justify-between text-right text-orange-400 px-8 py-4 ">
                      <div className="grid grid-flow-col  gap-3">
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                      </div>
                      <div className="text-zinc-400 text-right">
                        5th December 2020
                      </div>
                    </div>
                    <div className=" text-black ml-6 mr-6 p-3 border-orange-400 border-2 rounded-xl">
                      Great job dude, love your blue shoes haha. You are the man
                      of the match! I think I have buy the shoes like you in the
                      future. Anyway, Thank you!
                    </div>
                    <div className="text-right pr-6">
                      <button>
                        <Button
                          sx={{ borderRadius: 28 }}
                          variant="contained"
                          color="warning"
                        >
                          Rate Player
                        </Button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col ">
                <div className="w-30 h-20 shadow-md bg-white grid grid-flow-col justify-between rounded-lg items-center px-6">
                  <div className="flex flex-row items-center gap-3">
                    <img src={User2} className="w-13" />
                    <div className="text-zinc-800 font-bold">Zain Rosser</div>
                  </div>
                  <div className="flex flex-row gap-3 text-orange-400">
                    <div>Rate</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5"
                      fill="orange"
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="h-64 mt-4 shadow-lg bg-white grid grid-flow-row gap-2 rounded-lg items-center p-2">
                    <div className="flex flex-row justify-between text-right text-orange-400 px-8 py-4 ">
                      <div className="grid grid-flow-col  gap-3">
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                      </div>
                      <div className="text-zinc-400 text-right">
                        5th December 2020
                      </div>
                    </div>
                    <div className=" text-black ml-6 mr-6 p-3 border-orange-400 border-2 rounded-xl">
                      Great job dude, love your blue shoes haha. You are the man
                      of the match! I think I have buy the shoes like you in the
                      future. Anyway, Thank you!
                    </div>
                    <div className="text-right pr-6">
                      <button>
                        <Button
                          sx={{ borderRadius: 28 }}
                          variant="contained"
                          color="warning"
                        >
                          Rate Player
                        </Button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col ">
                <div className="w-30 shadow-md h-20 bg-white grid grid-flow-col justify-between rounded-lg items-center px-6">
                  <div className="flex flex-row items-center gap-3">
                    <img src={User3} className="w-13" />
                    <div className="text-zinc-800 font-bold">
                      Alfredo Rhielden
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 text-orange-400">
                    <div>Rate</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5"
                      fill="orange"
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="h-64 mt-4 shadow-lg bg-white grid grid-flow-row gap-2 rounded-lg items-center p-2">
                    <div className="flex flex-row justify-between text-right text-orange-400 px-8 py-4 ">
                      <div className="grid grid-flow-col  gap-3">
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                      </div>
                      <div className="text-zinc-400 text-right">
                        5th December 2020
                      </div>
                    </div>
                    <div className=" text-black ml-6 mr-6 p-3 border-orange-400 border-2 rounded-xl">
                      Great job dude, love your blue shoes haha. You are the man
                      of the match! I think I have buy the shoes like you in the
                      future. Anyway, Thank you!
                    </div>
                    <div className="text-right pr-6">
                      <button>
                        <Button
                          sx={{ borderRadius: 28 }}
                          variant="contained"
                          color="warning"
                        >
                          Rate Player
                        </Button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col ">
                <div className="w-30 h-20 shadow-md bg-white grid grid-flow-col justify-between rounded-lg items-center px-6">
                  <div className="flex flex-row items-center gap-3">
                    <img src={User4} className="w-13" />
                    <div className="text-zinc-800 font-bold">
                      Alfredo Rhielden
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 text-orange-400">
                    <div>Rate</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5"
                      fill="orange"
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="h-64 mt-4 shadow-lg bg-white grid grid-flow-row gap-2 rounded-lg items-center p-2">
                    <div className="flex flex-row justify-between text-right text-orange-400 px-8 py-4 ">
                      <div className="grid grid-flow-col  gap-3">
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                        <img src={Star} className="w-13" />
                      </div>
                      <div className="text-zinc-400 text-right">
                        5th December 2020
                      </div>
                    </div>
                    <div className=" text-black ml-6 mr-6 p-3 border-orange-400 border-2 rounded-xl">
                      Great job dude, love your blue shoes haha. You are the man
                      of the match! I think I have buy the shoes like you in the
                      future. Anyway, Thank you!
                    </div>
                    <div className="text-right pr-6">
                      <button>
                        <Button
                          sx={{ borderRadius: 28 }}
                          variant="contained"
                          color="warning"
                        >
                          Rate Player
                        </Button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Rate;
