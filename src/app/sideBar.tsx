import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 

const SideBar = () => {
  return (
    <div className=" fixed mt-16 max-lg:z-10">
      <div className="space-y-4 w-60  max-lg:w-[1409px] ">
        <div className=" ">

          <div className="space-y-1 max-lg:min-h-full flex flex-col max-lg:flex-row  min-h-screen pt-5 p-3 max-lg:p-2 flex-wrap  bg-gradient-to-t  from-blue-300 to-green-600  ">
            <Link href="/">
              <Button variant="ghost" className="w-full max-lg:text-white   justify-start mt-1  lg:text-lg  font-bold  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 max-lg:w-5 max-lg:h-5  mr-2 text-black  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Gallery
              </Button>
            </Link>
            <Link href="/album">
            <Button variant="ghost" className="w-full max-lg:text-white justify-start lg:text-lg  font-bold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 max-lg:w-5 max-lg:h-5  text-black  mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              Albums
            </Button>
            </Link>
            <Link href="/favorite">
            <Button variant="ghost" className="w-full max-lg:text-white  justify-start lg:text-lg  font-bold  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 max-lg:w-5 max-lg:h-5 text-black   mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              Favorite
            </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
