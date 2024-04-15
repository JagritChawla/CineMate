import {Link } from "react-router-dom"
export const Card = ({movie}) => {
  const movieName = movie.title;
  const movieOverview = movie.overview;
  const movieId = movie.id;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
    <div >
      <div style={{height: '97%'}} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 ">
            <Link to={`/movie/${movieId}`} >
              <img className="rounded-t-lg" src={posterUrl} alt={`${movieName} Poster`} />
            </Link>
            <div className="p-5">
              <Link to={`/movie/${movieId}`} >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movieName}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movieOverview}</p>
              
            </div>
          </div>
    </div>
  )
}
