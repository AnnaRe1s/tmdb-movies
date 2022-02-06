import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Cast.css";
import imgNull from "../../../Assests/user.png";

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

  // https://api.themoviedb.org/3/movie/${id}/credits?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US

  return (
    <div className="cast">
      <h1> Cast </h1>
      <div className="cast__background">
        {casts.map((cast) => {
          return (
            <div key={cast.credit_id} className="cast__card">
              {cast.profile_path === null ? (
                <img
                  src={imgNull}
                  alt={cast.original_name}
                  className="cast__imgNull"
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt={cast.name}
                  className="cast__img"
                />
              )}

              <h3>{cast.original_name}</h3>
              <h4>{cast.character}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
