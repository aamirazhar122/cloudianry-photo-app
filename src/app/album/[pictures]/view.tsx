"use client";
import {  AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CldImage } from "next-cloudinary";
import { AddTags } from "./action";
import { useState } from "react";
import { Edit3Icon } from "lucide-react";
import Link from "next/link";


const View = ({ src, tag }: { src: string; tag: string[] }) => {
  const [fav, setFav] = useState(tag.includes("favorite"));

  return (
    <div className="relative">
      <CldImage
        className="rounded-sm "
        width="460"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />

{/* Add to Favorite */}
      <div
        className="absolute top-1 right-2"
        onClick={() => {
          setFav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <>
            {" "}
            <AiFillHeart className=" w-6 h-6 max-lg:w-4 max-lg:h-4  text-red-700 cursor-pointer  " />
          </>
        ) : (
          <>
            {" "}
            <AiOutlineHeart className=" w-6 h-6 max-lg:w-4 max-lg:h-4 text-white hover:text-yellow-300 cursor-pointer  duration-300 " />
          </>
        )}
      </div>
      {/* Move to Edit Page */}
      
      <div   className="absolute top-1 left-2">
        <Link href={`/edit?publicId=${src}`} >
   <Edit3Icon  className=" w-6 h-6 max-lg:w-4 max-lg:h-4 text-white hover:text-red-700 cursor-pointer  " />
      </Link>
      </div>
      {/* add to Album  */}
      
      <div   className="absolute bottom-0 left-2">
        {/* <Link href={`/edit?publicId=${src}`} > */}
   
      {/* </Link> */}
      </div>
    </div>
  );
};

export default View;
