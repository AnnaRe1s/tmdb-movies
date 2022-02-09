import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// style import
import { Castdiv, HorizontalCards, Cards } from "../../Styles_Global/Div";
import { H1, H3, H4Ligth } from "../../Styles_Global/Texts";
import { Img } from "../../Styles_Global/Imagens";

// import img
import imgNull from "../../Assests/user.png";

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fecthCast() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US`
        );

        setCasts([...response.data.cast]);
      } catch (err) {
        console.log(err);
      }
    }
    fecthCast();
  }, []);



  return (
    <Castdiv>
      <H1> Cast </H1>
      <HorizontalCards>
        {casts.map((cast) => {
          return (
            <Cards key={cast.credit_id}>
              {cast.profile_path === null ? (
                <Img src={imgNull} alt={cast.original_name} />
              ) : (
                <Img
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt={cast.name}
                />
              )}

              <H3>{cast.original_name}</H3>
              <H4Ligth>{cast.character}</H4Ligth>
            </Cards>
          );
        })}
      </HorizontalCards>
    </Castdiv>
  );
}
