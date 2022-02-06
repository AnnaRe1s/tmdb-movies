import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "./Recommend.css";

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
    <div className="recommend">
      <h1> Recommendation</h1>

      <div className="recommend_FlexRow">
        {recommendations.map((recommendMovie) => {
          return (
            <div
              key={recommendMovie.id}
              className="recommend_card"
              onClick={() => {
                window.location.href = `/details/${recommendMovie.id}`;
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${recommendMovie.backdrop_path}`}
                alt={recommendMovie.title}
                className="recommend_img"
              />
              <div>
                <h2>{recommendMovie.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
