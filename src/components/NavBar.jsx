import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
    <nav>
    <ul>
        <li><Link to="/">Seuss Treassury</Link></li>
        <div>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/quotes">Quotes</Link></li>
        </div>
    </ul>
    </nav>
);
}

export default Navbar;
