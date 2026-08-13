import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Header() {
    const logo = "https://cdn-icons-png.flaticon.com/512/3157/3157356.png";
    return(
        <header>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <Navbar />
        </header>
    );
}

export default Header;