"use client"
import { useEffect, useState } from "react";
import { Import } from "lucide-react";
import Popular from "../components/Popular"
import NowPlaying from "@/components/NowPlaying";
import TopRated from "@/components/TopRated";
import UpComing from "@/components/UpComing"
import MovieCard from "@/app/detail/[id]/page";



export default function Home() {
  const [data, setData] = useState(null);
  const handleDataFromChild = (dataFromChild) => {
    setData(dataFromChild);
  };

  return (
    <div className="flex flex-col w-screen h-fit px-[20px] gap-y-[32px]">

      <NowPlaying sendData={handleDataFromChild} />

      <Popular sendData={handleDataFromChild} />
      <TopRated sendData={handleDataFromChild} />
      <UpComing sendData={handleDataFromChild} />
      <NowPlaying sendData={handleDataFromChild} />


    </div>

  );
}
