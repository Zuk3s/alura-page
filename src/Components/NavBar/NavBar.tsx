import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.svg";
import User from "../../Images/user.jpeg";
import "./index.css";
import { Input } from "../Input/Input";

export function NavBar() {
  return (
    <nav className="container">
      <div className="navbar-content">
        <Link className="logo" to="/">
          <img src={Logo} alt="Alura Dev" />
        </Link>

        <form action="" className="search-content">
          <Input type="text" placeholder="Busque por aqui" />
        </form>

        <div className="user-content">
          <img className="user-photo" src={User} alt="User" />
          <p className="user-name">Harry</p>
        </div>
      </div>
    </nav>
  );
}
