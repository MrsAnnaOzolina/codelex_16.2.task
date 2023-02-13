import { NavLink } from "react-router-dom";

function NavList() {
  let activeStyle= {
    textDecoration: "underline",
  };


  return (
    <div className="navbar">
      
    <nav>
    <a href="/" className="brand-logo"> Lulu blog</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink
            to=""
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="blog"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
}
export default NavList