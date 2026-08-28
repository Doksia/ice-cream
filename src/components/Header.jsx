import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  const [open, setOpen] = useState(false);

  const logo = "https://cdn-icons-png.flaticon.com/512/3157/3157356.png";

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>

      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Navbar normal (desktop) */}
      <div className="navbar-desktop">
        <Navbar />
      </div>

      {/* Navbar móvil */}
      {open && (
        <div className="navbar-mobile">
          <Navbar />
        </div>
      )}
    </header>
  );
}

export default Header;
