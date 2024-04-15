import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"
import { useEffect } from "react";

export const SearchPage = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { movieData }= useFetch(apiPath, query);

  useEffect(()=>{
    document.title = query +" / CineMate"
  })
  return (
    <main >
      <section className="pt-4 text-3xl text-grey-700 dark:text-white"> {movieData.length===0 ? `No result found for "${query}"` : `Results for "${query}"`}</section>
      <section className="py-7">
        <div className="flex justify-start flex-wrap items-stretch">
          { movieData.map((element) =>(
            <Card key={element.id} movie = {element}/>
          ))
          }
        </div>
      </section>
    </main>
  )
}
