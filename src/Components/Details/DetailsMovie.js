import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { H1, H4, H5, PLight, P } from "../../Styles_Global/Texts";
import { ImgDetails } from "../../Styles_Global/Imagens";

import {
  BackgroundDetails,
  InformationCard,
  FlexRow,
  SinopseDetails,
} from "../../Styles_Global/Div";

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
      <BackgroundDetails key={detail.id}>
        <ImgDetails
          src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
          alt={`movie ${detail.original_title}`}
        />
        <InformationCard>
          <H1>{detail.original_title}</H1>

          <div>
            <H5>{detail.release_date}</H5>

            <FlexRow>
              {detail.genres.map((element) => {
                return <H5 key={element.id}>{element.name},</H5>;
              })}
            </FlexRow>

            <H5>{detail.runtime}</H5>
          </div>

          <div>
            <H5>
              {" "}
              Avaliacao do usuario <P> {detail.vote_average} </P>{" "}
            </H5>
          </div>

          <SinopseDetails>
            <H4>Sinopse</H4>
            <PLight> {detail.overview}</PLight>
          </SinopseDetails>
        </InformationCard>
      </BackgroundDetails>
    );
  });
}
