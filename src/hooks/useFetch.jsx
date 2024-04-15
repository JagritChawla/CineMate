import { useEffect, useState  } from "react"

export const useFetch = (apiPath,query="") => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movieData,setMovieData] =  useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${query}&`
    useEffect(()=>{

        async function fetchMovies (){
          const response = await fetch(url);
          const data = await response.json();
          setMovieData(data.results);
        }
        fetchMovies();
      },[url])
  return { movieData }
}
