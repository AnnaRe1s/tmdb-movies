import axios from "axios";
import { useEffect, useState } from "react";

// style import
import { H1, P } from "../../../Styles_Global/Texts";
import { ButtonFilter } from "../../../Styles_Global/Butons";
import { Background, Flexwrap } from "../../../Styles_Global/Div";

export default function Filter() {
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    async function FetchGenre() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US"
        );
        console.log("*************", response);

        setGenres([...response.data.genres]);
      } catch (err) {
        console.error(err);
      }
    }

    FetchGenre();
  }, []);

  return (
    <Background>
      <H1>Milhões de Filmes, séries e pessoas para descobrir. Explore já.</H1>
      <>
        <P> FILTRE POR : </P>
        <Flexwrap>
          {genres.map((typeMovie) => {
            return (
              <ButtonFilter
                type="button"
                key={typeMovie.id}
                name={typeMovie.name}
              >
                {typeMovie.name}
              </ButtonFilter>
            );
          })}
        </Flexwrap>
      </>
    </Background>
  );
}

//* https://api.themoviedb.org/3/genre/movie/list?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US*/
