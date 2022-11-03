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
              <NavLink to="/" activeclassname="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/web" activeclassname="active">
                Web
              </NavLink>
            </li>
            <li>
              <NavLink to="/server" activeclassname="active">
                Server
              </NavLink>
            </li>
            <li>
              <NavLink to="/design" activeclassname="active">
                Design
              </NavLink>
            </li>
            <li>
              <NavLink to="/tool" activeclassname="active">
                Tool
              </NavLink>
            </li>
            <li>
              <NavLink to="/etc" activeclassname="active">
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