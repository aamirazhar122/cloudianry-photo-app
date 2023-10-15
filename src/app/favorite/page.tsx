import React from "react";

import cloudinary from "cloudinary";
import View from "../gallery/view";
import FavoriteList from "./Favirioutlist";

export interface MyImages {
  public_id: string;
  tags: string[];
}

const FavoriteItems = async () => {
  const res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite ")
    .sort_by("public_id", "desc")
    .max_results(5)
    .with_field("tags")
    .execute()) as { resources: MyImages[] };
  // console.log(res);

  return (
    <>
      <div className="flex mt-16 max-lg:mt-28  justify-between items-center text-center">
        <h2 className=" px-4  py-5 text-3xl max-lg:text-2xl font-bold  tracking-tight ">
          Favorite Items
        </h2>
      </div>
      <FavoriteList resources={res.resources}  />
    </>
  );
};

export default FavoriteItems;
