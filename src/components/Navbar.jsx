import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    

    return(
        <div>
            <nav>Este es el navbar</nav>
            <Link to="/">Home Page</Link>
            <Link to="/ice-creams">All ice creams</Link>
            <Link to="/new-ice-cream">Add new ice cream</Link>
        </div>
    );
}

export default Navbar;