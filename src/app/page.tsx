"use client"

import { Button } from "@/components/ui/button"
import axios from "axios";
import { get } from "http";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from 'lucide-react';


export default function Home() {
  const url = 'https://image.tmdb.org/t/p/w500'
  const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
  const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
const [popular, setPopular] = useState([])
  const getDATA = async () => {
    try {
   
      
      const response = await axios.get(`${TMDB_BASE_URL}//movie/popular?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${TMDB_API_TOKEN}`
        }
      })
     
      
      setPopular(response.data.results);
      console.log(response.data.results);
      






    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDATA()
  }, [])

  return (
    <div className="w-screen h-fit px-[20px] text-black">
<div className="w-full h-fit bg-green-300 flex flex-row justify-start gap-[20px] flex-wrap ">
  


      
 {popular.slice(0,10).map((movie) => {
  return (
    <div key={movie.title} className="w-[157.5px] h-[310px] bg-green-900 flex flex-col">
    
      <Image 
        src={`${url}${movie.backdrop_path}`} 
        width={157} 
        height={233} 
        alt={`${movie.title} backdrop`} 
        className="rounded-[8px]"
      />
      <div>
      <h1 className="flex items-center gap-[4px]"><Star width={16} height={16}/>{movie.vote_average}/10</h1>
      <h1> {movie.title}</h1>
        </div>
    
            </div>
  );
})}  
      </div>
        
      </div>
  
  );
}
