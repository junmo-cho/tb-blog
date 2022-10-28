import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <header>
      <div className="header-container">
        <h1>TechB</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                All
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;