import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./DetailsMovie.css";

export default function DetailsMovie() {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US`
        );
        setDetails([response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDetails();
  }, [id]);

  return details.map((detail) => {
    return (
      <div className="details_background" key={detail.id}>
        <img
          src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
          alt={`movie ${detail.original_title}`}
          className="detail_img"
        />

        <div className="details_info">
          <h1>{detail.original_title}</h1>

          <div>
            <h5> idade</h5>
            <h5>{detail.release_date}</h5>

            <div className="detail_genre">
              {detail.genres.map((element) => {
                return <h5 key={element.id}>{element.name},</h5>;
              })}
            </div>

            <h5>{detail.runtime}</h5>
          </div>

          <div>
            <h5> Avaliacao do usuario </h5>
            <p> {detail.vote_average} </p>
          </div>

          <div className="detail__sinopse">
            <h4>Sinopse</h4>
            <p> {detail.overview}</p>
          </div> 
        </div>
      </div>
    );
  });
}
// https://api.themoviedb.org/3/movie/634649/credits?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US
