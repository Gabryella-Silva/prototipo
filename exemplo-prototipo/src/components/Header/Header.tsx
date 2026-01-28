import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(){

    return(
        <header className="header">
            <nav>
            <Link to="/" > Home </Link> | {""}
            <Link to="/tasks" > Tarefas </Link> | {""}
            <Link to="/about" > Sobre </Link>

            </nav>
        </header>
    )

}