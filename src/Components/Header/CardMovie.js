import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CardMovie.css";

export default function CardMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=249da317fa7d1b9866d6eb1bca1a3a77"
        );
        setMovies([...response.data.results]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="allCards">
      {movies.map((movie) => {
        return (
          <Link
            to={`details/${movie.id}`}
            key={movie.id}
            className="card"
            style={{ textDecoration: "none", fontSize: "10px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
            />
            <h3>{movie.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
