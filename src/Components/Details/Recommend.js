import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// style import
import { Img } from "../../Styles_Global/Imagens";
import { H3 } from "../../Styles_Global/Texts";
import { ReccomendCard, Flexwrap, Column } from "../../Styles_Global/Div";

export default function Recommend() {
  const [recommendations, setRecommendations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchRecommend() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US&page=1`
      );

      console.log(id);
      console.log("response", response.data.results);

      setRecommendations([...response.data.results]);
    }

    fetchRecommend();
  }, [recommendations]);

  return (
    <Column>
      <h1> Recommendation</h1>

      <Flexwrap>
        {recommendations.map((recommendMovie) => {
          return (
            <ReccomendCard
              key={recommendMovie.id}
              onClick={() => {
                window.location.href = `/details/${recommendMovie.id}`;
              }}
            >
              <Img
                src={`https://image.tmdb.org/t/p/original${recommendMovie.backdrop_path}`}
                alt={recommendMovie.title}
              />
              <div>
                <H3>{recommendMovie.title}</H3>
              </div>
            </ReccomendCard>
          );
        })}
      </Flexwrap>
    </Column>
  );
}
