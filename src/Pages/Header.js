import CardMovie from "../Components/Header/CardMovie";
import Filter from "../Components/Header/Filter";

import Nav from "../Components/Header/Nav";

export default function Header() {
  return (
    <header>
      <Nav />
      <Filter />
      <CardMovie />
    </header>
  );
}
