import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <nav>
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/ice-creams">All ice creams</Link></li>
                <li><Link to="/new-ice-cream">Add new ice cream</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;