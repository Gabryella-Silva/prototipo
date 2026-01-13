import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header>
            <nav>
            <Link to="/" > HOME</Link>
            <Link to="/tasks" > Tarefas </Link>
            <Link to="/about" > Sobre </Link>

            </nav>
        </header>
    )

}