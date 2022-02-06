import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./Trailers.css";

export default function Trailers() {
  const [trailers, setTrailers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrailers() {
      const objResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US`
      );

      const objData = objResponse.data;

      setTrailers([objData.results[0]]);
    }

    fetchTrailers();
  }, []);

  const HandleReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="background__trailers">
      <h1>Trailers</h1>
      <div className="trailer">
        {trailers.map((trailer) => {
          return <YouTube videoId={trailer.key} onReady={HandleReady} className="trailer" key={trailer.id} />;
        })}
      </div>
    </div>
  );
}

// https://api.themoviedb.org/3/movie/{id}/videos?api_key=249da317fa7d1b9866d6eb1bca1a3a77&language=en-US
// https://www.themoviedb.org/video/play?key=
