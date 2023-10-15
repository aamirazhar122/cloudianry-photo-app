"use client"

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

interface uploadImage {
  event: "success";
  info: { public_id: string };
}
const GalleryPage = () => {
  const [ImageId, setImageId] = useState("cld-sample-5");
  return (
    <div>
      {" "}
      <CldUploadButton
        uploadPreset="fjbusbrg"
        onUpload={(result) => {
          let res = result as uploadImage;
          setImageId(res.info.public_id);
        }}
      />
      <CldImage
        width="460"
        height="400"
        src={ImageId}
        sizes="100vw"
        alt="Description of my image"
      /> 
    </div>
  );
};

export default GalleryPage;
