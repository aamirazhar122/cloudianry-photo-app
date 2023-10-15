import React, { Suspense } from 'react';
import Upload from './upload';
import cloudinary from 'cloudinary';
import CircularProgress from '@mui/material/CircularProgress';
interface MyImages {
  public_id: string;
  tags: string[];
}

// Lazy load the View component
const View = React.lazy(() => import ('./view'));

const Gallery = async () => {
  
  const res = await cloudinary.v2.search
    .expression('resource_type:image ')
    .sort_by('public_id', 'desc')
    // .max_results(7)   You can set the limits of images which amount you want to renter 
    .with_field("tags")
    .execute() as { resources: MyImages[] };  
  console.log(res);
  
  return (
    <>
      <div className='flex mt-16 max-lg:mt-28 pt-1  justify-between items-center text-center'>
        <h2 className=" px-4  py-5 text-3xl max-md:text-2xl font-bold  tracking-tight ">
          Gallery
        </h2>
        <Upload />
      </div>
      <div className='max-lg:columns-2 columns-4 mx-auto  p-4 gap-4 space-y-4'>
        <Suspense fallback={<div><CircularProgress /></div>}>  {/* Provide a fallback UI when the View component is being loaded */}
          {
            res.resources.map((items, index) => (
              <div key={index} className='break-inside-avoid '>
                <View src={items.public_id} tag={items.tags} />
              </div>
            ))
          }
        </Suspense>
      </div>
    </>
  );
}

export default Gallery;
