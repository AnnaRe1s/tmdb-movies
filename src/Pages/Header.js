import CardMovie from "../Components/Header/CardMovie";
import Filter from "../Components/Header/Filter/Filter";

import Nav from "../Components/Nav/Nav";

export default function Header() {
  return (
    <header>
      <Nav />
      <Filter />
      <CardMovie />
    </header>
  );
}
