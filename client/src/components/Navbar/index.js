import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <header>
      <div className="header-container">
        <h1>&lt; TechB /&gt;</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                Web
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                Server
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                Design
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                Tool
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                Etc
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;