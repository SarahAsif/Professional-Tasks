import React from "react";
import clsx from "clsx";
import { IsMobileWidth } from "../utils";
import Divider from "@mui/material/Divider";
import Football1 from "../images/football1.png";
import { IsTabletWidth } from "../utils";
import { IsDesktopSmallWidth } from "../utils";
import { IsDesktopWidth } from "../utils";
import { Form, Link, useParams } from "react-router-dom";
import DP from "../images/dp.png";
import fb from "../images/facebook.png";
import insta from "../images/instagram.png";
import twitter from "../images/twitter.png";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ArticleComp = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();

  return (
    <div className="p-16 flex flex-col gap-16 ">
      <div className="first space-y-10  flex flex-col  ">
        <div className="font-bold text-4xl my-3">
          The best games in this year
        </div>
        <div className="text-center items-center flex">
          <img src={Football1} className="w-full" />
        </div>
        <div
          className={clsx(
            "flex flex-row justify-between leading-loose",
            mobileWidth && "flex-col items-center text-center"
          )}
        >
          <div>
            <div className=" text-zinc-400">Author</div>
            <div>Zaire Stanton</div>
          </div>
          <div>
            <div className=" text-zinc-400">Reading Time</div>
            <div>10min.</div>
          </div>
          <div>
            <div className="text-zinc-400">Date</div>
            <div>17 January 2021</div>
          </div>
          <div>
            <div className="text-zinc-400">Read by</div>
            <div>1,352 People</div>
          </div>
          <div className="text-zinc-400">
            <div className="text-zinc-400">Share</div>
            <div className="flex flex-row gap-1">
              <img src={fb} />
              <img src={insta} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "dusra flex flex-row justify-between",
          mobileWidth && "flex-col"
        )}
      >
        <div className="indent-10 leading-loose max-w-3xl">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt,
            sit assumenda accusamus amet inventore non reiciendis id aliquam,
            dolorem impedit suscipit quas ex? Temporibus magni excepturi autem
            beatae quibusdam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consequatur quia sit aspernatur consectetur
            voluptas? Enim quam, corrupti reiciendis veritatis optio ab
            distinctio? Autem numquam tenetur dolores dignissimos. Perferendis,
            nihil! Exercitationem.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt,
            sit assumenda accusamus amet inventore non reiciendis id aliquam,
            dolorem impedit suscipit quas ex? Temporibus magni excepturi autem
            beatae quibusdam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consequatur quia sit aspernatur consectetur
            voluptas? Enim quam, corrupti reiciendis veritatis optio ab
            distinctio? Autem numquam tenetur dolores dignissimos. Perferendis,
            nihil! Exercitationem.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt,
            sit assumenda accusamus amet inventore non reiciendis id aliquam,
            dolorem impedit suscipit quas ex? Temporibus magni excepturi autem
            beatae quibusdam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consequatur quia sit aspernatur consectetur
            voluptas? Enim quam, corrupti reiciendis veritatis optio ab
            distinctio? Autem numquam tenetur dolores dignissimos. Perferendis,
            nihil! Exercitationem.
          </div>
        </div>
        <div className="flex flex-col space-y-10 ">
          <div className="bg-white shadow-lg p-5 space-y-5">
            <div className="font-bold p-2 leading-loose">
              Wont miss the newest article? <br />
              Let us notify you{" "}
            </div>
            <div className="flex items-center">
              <TextField
                sx={{
                  "& > :not(style)": { m: 1 },
                }}
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                className="w-3/4"
              />
              <Button variant="contained" color="warning">
                Send
              </Button>
            </div>
          </div>
          <div className={clsx("max-w-md leading-loose", mobileWidth && "")}>
            <div className="font-bold text-orange-400">
              Most Popular Articles
            </div>
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
      <div className="tesra leading-10 space-y-5">
        <h1 className="font-semibold text-2xl">Discussion</h1>
        <div className="">
          <Card className="w-2/3">
            <Paper round={true} variant="elevation24 z-30 ">
              <div
                className={clsx(
                  "flex flex-row  gap-5 p-5",
                  (mobileWidth || tabletWidth || desktopSmallWidth) &&
                    "text-center flex-col items-center"
                )}
              >
                <div className="mt-2">
                  <img src={DP} className="rounded-full" />
                </div>
                <div className="leading-snug text-zinc-400 space-y-3">
                  <div
                    className={clsx(
                      "flex flex-row justify-between gap-2",
                      mobileWidth && "flex-col"
                    )}
                  >
                    <div className="text-lg font-bold text-zinc-800">
                      Cooper Carder
                    </div>
                    <div className="text-neutral-500">18 January 2021</div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequatur quia sit aspernatur consectetur voluptas? Enim
                    quam, corrupti reiciendis veritatis optio ab distinctio?
                    Autem numquam tenetur dolores dignissimos. Perferendis,
                    nihil! Exercitationem.
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outlined" color="warning">
                      Like
                    </Button>
                    <Button variant="outlined" color="warning">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
            <Divider />{" "}
            <Paper round={true} variant="elevation24 z-30 ">
              <div
                className={clsx(
                  "flex flex-row  gap-5 p-5",
                  (mobileWidth || tabletWidth || desktopSmallWidth) &&
                    "text-center flex-col items-center"
                )}
              >
                <div className="mt-2">
                  <img src={DP} className="rounded-full" />
                </div>
                <div className="leading-snug text-zinc-400  space-y-3">
                  <div
                    className={clsx(
                      "flex flex-row justify-between gap-2",
                      mobileWidth && "flex-col"
                    )}
                  >
                    <div className="text-lg font-bold text-zinc-800">
                      John Red
                    </div>
                    <div className="text-neutral-500">18 January 2021</div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequatur quia sit aspernatur consectetur voluptas? Enim
                    quam, corrupti reiciendis veritatis optio ab distinctio?
                    Autem numquam tenetur dolores dignissimos. Perferendis,
                    nihil! Exercitationem.
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outlined" color="warning">
                      Like
                    </Button>
                    <Button variant="outlined" color="warning">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
            <Divider />{" "}
            <Paper round={true} variant="elevation24 z-30 ">
              <div
                className={clsx(
                  "flex flex-row  gap-5 p-5",
                  (mobileWidth || tabletWidth || desktopSmallWidth) &&
                    "text-center flex-col items-center"
                )}
              >
                <div className="mt-2">
                  <img src={DP} className="rounded-full" />
                </div>
                <div
                  className={clsx(
                    "flex flex-col leading-snug text-zinc-400  space-y-3",
                    mobileWidth && "items-center text-center"
                  )}
                >
                  <div
                    className={clsx(
                      "flex flex-row justify-between gap-2",
                      mobileWidth && "flex-col"
                    )}
                  >
                    <div className="text-lg font-bold text-zinc-800">
                      Alex Smith
                    </div>
                    <div className="text-neutral-500">18 January 2021</div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequatur quia sit aspernatur consectetur voluptas? Enim
                    quam, corrupti reiciendis veritatis optio ab distinctio?
                    Autem numquam tenetur dolores dignissimos. Perferendis,
                    nihil! Exercitationem.
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outlined" color="warning">
                      Like
                    </Button>
                    <Button variant="outlined" color="warning">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
            <Divider />
          </Card>
        </div>
      </div>
      <div className="last w-2/3 space-y-8">
        <h1 className="font-semibold text-2xl">Leave a Reply</h1>
        <form>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            className="flex flex-col"
          >
            <TextField
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows={4}
              className="bg-white"
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="bg-white"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <div className="justify-end text-right m-4">
            {" "}
            <Button variant="contained" color="warning">
              Post comment
            </Button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default ArticleComp;
