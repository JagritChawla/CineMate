import { useEffect, useState  } from "react"

export const useFetch = (apiPath,query="") => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movieData,setMovieData] =  useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${query}&`
    // console.log(url)
    useEffect(()=>{

        async function fetchMovies (){
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setMovieData(data.results);
          // console.log(data.results)
        }
        fetchMovies();
      },[url])
  return { movieData }
}
