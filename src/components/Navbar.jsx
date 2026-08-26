import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/icecreams">All ice creams</Link></li>
        <li><Link to="/new-icecream">Add new ice cream</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
