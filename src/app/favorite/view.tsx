'use client'
import {AiFillHeart , AiOutlineHeart} from "react-icons/ai"
import { CldImage } from "next-cloudinary";
import { AddTags } from "../gallery/action";
import { useState } from "react";
 


const View =  ({src ,tag ,fun }:{src:string ,tag:string[], fun:any}) => {
 
const [fav, setFav] = useState(tag.includes('favorite'));
   
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

 
  
  <div className = "absolute top-1 right-2" onClick={()=>{
    fun(src);
    
    setFav(!fav); AddTags(src,fav)} }>

  {
  fav ? <> <AiFillHeart className=" w-6 h-6 max-lg:w-4 max-lg:h-4  text-red-700 cursor-pointer  " /></> : <>   <AiOutlineHeart className = " w-6 h-6 max-lg:w-4 max-lg:h-4 text-white hover:text-yellow-300 cursor-pointer  duration-300 "/></>
}
   
  </div>
      </div>
  );
}

export default View;

   
