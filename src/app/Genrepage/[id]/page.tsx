"use client"
import React from 'react'
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useState,useEffect } from 'react';
import { Movie } from '@/types/movie-type';
import Image from 'next/image';
import { Filter, Star } from 'lucide-react'
import { useRouter } from 'next/navigation';
const page = () => {
    const params = useParams();
    const id = params.id;
  const url = 'https://image.tmdb.org/t/p/w500'
  const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
  const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
  const [genreIds, SetgenreIds] = useState<Movie[]>([])
  const getDATA = async () => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/discover/movie?language=en&with_genres=${id}&page=${1}`, {
        headers: {
          Authorization: `Bearer ${TMDB_API_TOKEN}`
        }
      })
      SetgenreIds(response.data.results);
    console.log(id);
    
    
      
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getDATA()
  }, [])
const router = useRouter();
     const jump=(id:number)=>{
       router.push(`/detail/${id}`);
       SetgenreIds([])
    }
 

  return (
    <div className='px-[20px]'>
       <h1>titles in  {genreIds.length}</h1>
         <div className="w-full h-fit flex flex-row justify-start gap-[20px] lg:gap-[32px] flex-wrap">
      
      {genreIds.map((movie) => {
        return (
          <div key={movie.id} className="w-[157.5px] bg-cardWhite flex flex-col rounded-[8px]" onClick={()=>jump(movie.id)}  >

            <Image
              src={`${url}${movie.poster_path}`}
              width={157.5}
              height={233}
              alt={`${movie.title} backdrop`}
              className="rounded-[8px] "
            />

            <div className='text-[15px] px-[8px]'>
              <h1 className="flex items-center gap-[4px]"><Star width={16} height={16} />{movie.vote_average}/10</h1>
              <h1 className='w-full h-[56px]'> {movie.title}</h1>
            </div>
          </div>
        );
      })}
    </div>

    </div>
  )
}

export default page