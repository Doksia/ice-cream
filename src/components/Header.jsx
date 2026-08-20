import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  const logo = "https://cdn-icons-png.flaticon.com/512/3157/3157356.png";

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <Navbar />
    </header>
  );
}

export default Header;
