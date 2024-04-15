import { Link } from "react-router-dom"
import pageNotFound from "../assets/images/pagenotfound.png"
import { useEffect } from "react"
export const PageNotFound = () => {
  useEffect(()=>{
    document.title = "Page Not Found / CineMate"
  },[])

  return (
    <main>
      <section className="flex flex-col justify-center ">
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl dark:text-white">Error 404</h1>
          <h2 className="text-3xl dark:text-white">Page Not Found</h2>
          <img className="max-w-72 my-5" src={pageNotFound} alt="" />
          <p className="text-xl dark:text-white mt-4">The page you are looking for does not exist.</p>
          <p className="p-5" >
            <Link className="bg-gray-700 text-white hover:bg-gray-600 dark:bg-blue-700 dark:hover:bg-blue-600 p-3 mt-5 rounded  " to="/">Back to Home</Link>
          </p>
        </div>
        
      </section>
    </main>
  )
}
