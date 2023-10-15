'use client'
import React, { useEffect, useState } from 'react';
import View from './view';
import { MyImages } from './page';

const FavoriteList = ({resources}:{resources:MyImages[]}) => {
    const [initialState, setInitialState] = useState(resources);
    useEffect(() => {
    
        setInitialState(resources)
      },[resources] );
  return (
    <div className='max-lg:columns-2 columns-4 mx-auto  p-4 gap-4 space-y-4'>
    {initialState.map((items, index) => (
      <div key={index}>
        <View src={items.public_id} tag={items.tags} fun={(public_id:string)=>{
            setInitialState((current)=>current.filter((val)=>val.public_id !== public_id))
        }} />
      </div>
    ))}
  </div>
  );
}

export default FavoriteList;
