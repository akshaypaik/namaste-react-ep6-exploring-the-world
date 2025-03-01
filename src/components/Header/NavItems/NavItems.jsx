import { useState } from 'react';
import './NavItems.css';

export default function NavItems() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className='login-btn' style={{backgroundColor: isLoggedIn ? 'rgb(233, 61, 61)' : 'green', color: 'white'}} >
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>
            </ul>
        </div>
    )
}