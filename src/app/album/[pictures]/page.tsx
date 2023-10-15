import React from 'react';

import cloudinary from 'cloudinary'
import View from './view';


interface MyImages{
 public_id:string;
 tags: string[]

}


const Gallery = async ({params}:{params:{pictures:string}}) => {
  
  
  const res =await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${params.pictures}`)
  .sort_by('public_id','desc')
  .max_results(7)
  .with_field("tags")
  .execute() as {resources:MyImages[]};  
  console.log(res);
  
  return (
    <>
    <div className='flex mt-16 max-lg:mt-28  justify-between items-center text-center'>
      <h2 className=" px-4  py-5 text-3xl max-md:text-2xl font-bold  tracking-tight ">
            {`Album Name: ${params.pictures} ` }
          </h2>
          
    </div>
    <div className='max-lg:columns-2 columns-4 mx-auto  p-4 gap-4 space-y-4'>
     
     {
      res.resources.map((items,index)=>(
        <div key={index} className='break-inside-avoid '>
         <View src={items.public_id} tag= {items.tags} />
        </div>
      ))
     }


    </div>
    </>
  );
}

export default Gallery;
