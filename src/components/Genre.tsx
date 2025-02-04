"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import axios from 'axios'
  import { Movie } from '@/types/movie-type'
  import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'

const Genre = () => {
    const url = 'https://image.tmdb.org/t/p/w500'
    const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
    const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
  
    const [popular, setPopular] = useState<Movie[]>([])
    const getDATA = async () => {
      try {
        const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?language=en`, {
          headers: {
            Authorization: `Bearer ${TMDB_API_TOKEN}`
          }
        })
        setPopular(response.data.genres);
  console.log(response.data.genres);
  
  
      }
      catch (err) {
        console.log(err);
      }
    }
    useEffect(() => {
      getDATA()
    }, [])
    const [genra,setGenra] = useState([])
const router = useRouter();
      const jump = (genre:number,name:string  ) => {
//         setGenra((prevgenre)=>[...prevgenre, genre])
//  console.log(genra.join("%"));

    
        router.push(`/Genrepage/${genre+name}`);
        console.log(name);
        
      };

 

  return (
    <div>
        <DropdownMenu>
        
  <DropdownMenuTrigger>
    <Button>Genre</Button>
  </DropdownMenuTrigger>
  
  
  <DropdownMenuContent>
  <DropdownMenuLabel>Genre</DropdownMenuLabel>
  <DropdownMenuSeparator/>
  <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
  <div className='w-screen flex flex-row flex-wrap '>
   {popular.map((genre)=>{
    return(


         <DropdownMenuItem key={genre.name} onClick={()=>jump(genre.id,genre.name)}>
        <Badge>{genre.name}</Badge>
         </DropdownMenuItem>
    )
   })}
    </div>
  </DropdownMenuContent>
 
 
</DropdownMenu>

    </div>
  )
}

export default Genre