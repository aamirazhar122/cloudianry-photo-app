import * as React from "react"
 

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { folderType } from "./page"
import Link from "next/link"



const FolderList = ({folder}:{folder:folderType}) => {
  return (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>{folder.name}</CardTitle>
      <CardDescription>Please Click on View Now button to view the picture present in {folder.name}  </CardDescription>
    </CardHeader>
    
    <CardFooter className="flex justify-end">
      <Link href={`/album/${folder.name}`} >
      <Button>View Now</Button>
      </Link>
    </CardFooter>
  </Card>
  );
}

export default FolderList;
