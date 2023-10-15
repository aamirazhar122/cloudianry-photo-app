'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { FolderCreate } from "./action"
const AlbumDialog = ({image}:{image:string}) => {
    const [album, setAlbum] = useState('');
    const [open, setOpen] = useState(false);
  return (
    <>
  
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 m-0"> <AiFillFolderAdd  className=" w-6 h-6 max-lg:w-4 max-lg:h-4 text-white hover:text-red-700 cursor-pointer  " /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add To Album</DialogTitle>
          <DialogDescription>
            Enter Album Name Where You Want To Save The Picture.
            Click Add To Album When You're Done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="album-name" className="text-right">
              Name
            </Label>
            <Input id="album-name" value={album} onChange={(e)=>(setAlbum(e.target.value))} className="col-span-3" placeholder="Album Name Here....." />
          </div>
         
        </div>
        <DialogFooter>
          <Button onClick={async()=>{ 
            
            
            setOpen(false)
        await FolderCreate(album,image)
        }
            } type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}

export default AlbumDialog;
