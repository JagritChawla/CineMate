import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"
import { useEffect } from "react";
export const MovieList = ({apiPath,title}) => {


  const { movieData }= useFetch(apiPath);

  useEffect(()=>{
    document.title = title + " / CineMate";
  })
  return (
    <main >
      <section className="py-7">
        <div className="flex justify-start tablet:justify-center flex-wrap items-stretch">
          { movieData.map((element) =>(
            <Card key={element.id} movie = {element}/>
          ))
          }
        </div>
      </section>
    </main>
  )
}
