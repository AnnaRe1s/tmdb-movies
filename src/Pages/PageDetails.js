import Nav from "../Components/Header/Nav";
import Cast from "../Components/Details/Cast";
import DetailsMovie from "../Components/Details/DetailsMovie";
import Recommend from "../Components/Details/Recommend/Recommend";
import Trailers from "../Components/Details/Trailers/Trailers";

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
