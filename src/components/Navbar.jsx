import { Link } from "react-router-dom";

const navElement = [
  { path: "/", name: "Home" },
  { path: "/checkout", name: "Checkout" },
];
const NavbarEl = () => {
  return (
    <nav>
      <ul>
        {navElement.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarEl;
