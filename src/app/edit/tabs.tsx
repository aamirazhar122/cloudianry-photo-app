"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";

export function TabsDemo({ src }: { src: string }) {


  return (
    <Tabs defaultValue="Original" className="w-full px-5 py-4">
      <TabsList
        className="grid w-full grid-cols-3"
        style={{
          background: `linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,139,45,1) 100%)`,
        }}
      >
        <TabsTrigger value="Original">Original</TabsTrigger>
        <TabsTrigger value="Blur">Blur</TabsTrigger>
        <TabsTrigger value="GrayScale"> Gray Scale</TabsTrigger>
      </TabsList>
     {/* Original Image */}
      <TabsContent value="Original">
        <div className="flex gap-7 justify-center items-center py-4">
          <CldImage
            className="rounded-sm "
            width="250"
            height="210"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            className="rounded-sm "
            width="250"
            height="210"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      {/* Blur Image */}
      <TabsContent value="Blur">
        <div className="flex gap-7 justify-center items-center py-4">
          <CldImage
            className="rounded-sm "
            width="250"
            height="210"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            className="rounded-sm "
            width="250"
            height="210"
            src={src}  // use the blurSrc here
            sizes="100vw"
            alt="Description of my image"
           effects={[ {blur:"600"}]} 
          />
        </div>
      </TabsContent>
      {/* GrayScale Image */}
      <TabsContent value="GrayScale">
        <div className="flex gap-7 justify-center items-center py-4">
          <CldImage
            className="rounded-sm "
            width="250"
            height="210"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            className="rounded-sm "
            width="250"
            height="210"
            src={src}  // use the grayScaleSrc here
            sizes="100vw"
            alt="Description of my image"
            effects={[ {grayscale:true}]} 
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
