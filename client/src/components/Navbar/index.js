import { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

const navData = [
  {
    id: 0,
    category: "All",
  },
  {
    id: 1,
    category: "Web",
  },
  {
    id: 2,
    category: "Server"
  },
  {
    id: 3,
    category: "Design"
  },
  {
    id: 4,
    category: "Tool"
  },
  {
    id: 5,
    category: "Etc"
  },
];

const Navbar = () => {
  const location = useLocation(); 
  const params = new URLSearchParams(location.search);
  const categoryParams = params.get("category");

  const navigate = useNavigate();

  // useEffect(() => {
  //   return navigate("/?category=All", { replace: true });
  // }, []);

  return (
    <header>
      <div className="header-container">
        <h1>&lt; TechB /&gt;</h1>
        <nav>
          <ul>
            { navData.map((el, i) => (
              <li key={el.id}>
                <Link to={`/?category=${el.category}`} className={ el.category === categoryParams ? "active" : null }>{el.category}</Link>
              </li>
            )) }
            {/* <li>
              <NavLink to="/" activeclassname="active">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/?category=web" activeclassname="active">
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
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;