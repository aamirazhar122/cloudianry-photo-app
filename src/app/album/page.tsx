import cloudinary from 'cloudinary'
import FolderList from './folderList';

export interface folderType {
    name:string,
    path:string
}
const Page = async () => {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {folders:folderType[]}
  return (
    <div>

    <div className=" mt-16 max-lg:mt-28  ">
    <h2 className=" px-4  py-5 text-3xl max-lg:text-2xl font-bold  tracking-tight ">
    Picture Albums
    </h2>
    </div>
    {/* data of folder which come form cloudinary folder */}
    
    <div className="px-5 py-5 md:space-x-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
    {
        folders.map((item, i) => (
            <div key={i}>
                <FolderList folder={item} />
            </div>
        ))
    }
</div>

    
  </div>
  );
}

export default Page;
