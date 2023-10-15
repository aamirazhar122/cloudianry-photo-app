import React from 'react';
import { TabsDemo } from './tabs';
import { log } from 'console';

const Page = ({searchParams: { publicId}}:{searchParams: { publicId:string}}) => {

  
  return (
    <>
    <div className=" mt-16 max-lg:mt-28  ">
    <h2 className=" px-4  py-5 text-3xl font-bold  tracking-tight ">
      Edit Picture
    </h2>
  </div>
  <TabsDemo src={publicId} />
    </>
  );
}

export default Page;
