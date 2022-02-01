import Filter from "./Filter/Filter";
import Nav from "./Nav/Nav";


export default function Header(){
    return(
        <header>
            <Nav/>
            <Filter/>
        </header>
    )
}