import axios from "axios";
import { useEffect, useState } from "react";

import "./Filter.css";

export default function Filter() {
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    async function FetchGenre() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US"
        );

        setGenres([...response.data.genres]);
      } catch (err) {
        console.error(err);
      }
    }

    FetchGenre();
  }, []);



  
  return (
    <>
      <h1>Milhoes de Filmes, series e oessoas para descobrir. Explore ja.</h1>
      <div>
        <p> FILTRE POR : </p>
        {genres.map((typeMovie) => {
          return (
            <div   key={typeMovie.id}>
              <button type="button" onClick={(event) => {

                  console.log("voce clicou em",  event.target.name)


              }} name={typeMovie.name} >
                {typeMovie.name}
              </button>
              <i className="fas fa-times"></i>
            </div>
          );
        })}
      </div>
    </>
  );
}

//* https://api.themoviedb.org/3/genre/movie/list?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US*/