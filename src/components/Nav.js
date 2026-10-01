import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#menu", label: "Menu" },
  { to: "/booking", label: "Reservations" },
  { to: "/#order", label: "Order Online" },
  { to: "/#login", label: "Login" },
];

function Nav({ open, onNavigate }) {
  return (
    <nav aria-label="Main navigation" className={open ? "nav open" : "nav"}>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <NavLink to={link.to} onClick={onNavigate}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
