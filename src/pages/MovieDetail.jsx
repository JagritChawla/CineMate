import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieDetail = () => {

  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const params = useParams();
  console.log(params.id);
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`


  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchMovies();
  }, [params.id])

  const posterUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`

  useEffect(()=>{
    console.log(data.title)
    document.title = `${data.title} / CineMate`
  })

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={posterUrl} alt={data.title + "'s poster"} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white ">
          <h1 className="text-4xl font-bold text-center lg:text-left my-4">{data.title}</h1>
          <p className="my-4">{data.overview}</p>
          <p className="flex flex-wrap my-7 gap-2">
            {data.genres?.map((elem) => ( //the ? used is optional chaining  if data.genres is undefined or null, the mapping operation won't be attempted, and it won't throw an error
              <span key={elem.id} className="border border-gray-200 rounded dark:border-gray-600 p-2 mr-2">{elem.name}</span>
            ))}

          </p>



          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2  text-gray-900 dark:text-white">{data.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{data.vote_count} reviews</span>
          </div>
          
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{data.runtime} minutes</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{data.budget} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{data.revenue} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{data.release_date} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="" >{data.imdb_id}</a>
          </p>
        </div>
      </section>
    </main>
  )
}
