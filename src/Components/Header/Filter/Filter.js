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

  const HandleChangeColor = (event) => {
    const btn = event.target;
    btn.style.backgroundColor = "orange";
  };

  return (
    <div className="filter_background">
      <h1>Milhoes de Filmes, series e pessoas para descobrir. Explore ja.</h1>
      <div>
        <p> FILTRE POR : </p>
        <div className="filter">
          {genres.map((typeMovie) => {
            return (
              <button
                type="button"
                className="filter_btn"
                key={typeMovie.id}
                onClick={HandleChangeColor}
                name={typeMovie.name}
              >
                {typeMovie.name} <i className="fas fa-times"></i>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

//* https://api.themoviedb.org/3/genre/movie/list?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US*/
