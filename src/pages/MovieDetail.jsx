import { useEffect,useState } from "react"

export const MovieDetail = () => {


  useEffect(()=> {
    async function fetchDetails (){
      var str = window.location.pathname
      // console.log(window.location.pathname);
      console.log(str.substring(str.lastIndexOf('/') + 1))

      const response = await fetch(`https://api.themoviedb.org/3/movie/${str}?api_key=aa1060db40f72dd06247a29918c897d5`);
      const data = await response.json();
      // setMovies(data.results);
      console.log(data)
    }
    fetchDetails();
  })

  return (
    <main>MovieDetail</main>
  )
}
