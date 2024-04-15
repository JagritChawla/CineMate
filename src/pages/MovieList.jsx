import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"
export const MovieList = ({apiPath}) => {


  const { movieData }= useFetch(apiPath);

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
