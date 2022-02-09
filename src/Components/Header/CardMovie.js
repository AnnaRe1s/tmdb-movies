import axios from "axios";
import { useEffect, useState } from "react";

// style import
import Pagination from "@material-ui/lab/Pagination";
import { H3 } from "../../Styles_Global/Texts";
import { Column, Flexwrap } from "../../Styles_Global/Div";
import { Img } from "../../Styles_Global/Imagens";
import { Links } from "../../Styles_Global/Links";

export default function CardMovie() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          // "https://api.themoviedb.org/3/movie/popular?api_key=249da317fa7d1b9866d6eb1bca1a3a77"
          `https://api.themoviedb.org/3/movie/popular?api_key=249da317fa7d1b9866d6eb1bca1a3a77&page=${pages}&language=en-US`
        );
        setMovies([...response.data.results]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovies();
  }, [pages]);

  const handleClick = (event) => {
    console.log("Event", event.target.innerText);

    const page = event.target.innerText;
    const numberPage = Number(page);

    setPages(numberPage);
  };

  return (
    <Column center>
      <Flexwrap>
        {movies.map((movie) => {
          return (
            <Links
              href={`details/${movie.id}`}
              key={movie.id}
              className="card"
            >
              <Img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.name}
              />
              <H3>{movie.title}</H3>
            </Links>
          );
        })}
      </Flexwrap>
      <Pagination
        count={100}
        variant="outlined"
        onClick={handleClick}
        className="cards_pages"
      />
    </Column>
  );
}
