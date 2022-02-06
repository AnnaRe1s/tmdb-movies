import Nav from "../Nav/Nav";
import Cast from "./Cast/Cast";
import DetailsMovie from "./MovieDetails/DetailsMovie";
import Recommend from "./Recommend/Recommend";
import Trailers from "./Trailers/Trailers";

export default function PageDetails() {
  return (
    <div>
      <Nav />
      <DetailsMovie />
      <Cast />
      <Trailers />
      <Recommend />
    </div>
  );
}
