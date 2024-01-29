import '../style/nav.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import Search from './Search'

/**
 * Used to hold links for the other pages as well
 * as the header for the entire website
 * 
 * The useRef Hook allows you to persist values between renders.
 */

function Navbar() {

    // useRef and Arrow function used when the screen only fits on Mobile size or smaller
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <header className="header">
                <div className="headerTop">
                    <a href="/" className="logoLink">
                        <img
                            className="headerLogo"
                            alt="Astral Express Logo"
                            src="/website-icons/astral_express_train.png"
                        />
                    </a>
                    <h1 className="headerTitle">Astral Express</h1>
                    <Search/>
                </div>
            </header>
            <div className="headerNavbar">
                <nav className="navbar" ref={navRef}> 
                    <ul className="navLinks">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <a href="/Characters">Characters</a>
                        </li>
                        <li>
                            <a href="/Light_Cones">Light Cones</a>
                        </li>
                    </ul>
                    <button className="navBtn navCloseBtn" onClick={showNavBar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="navBtn"
                    onClick={showNavBar}>
                    <FaBars />
                </button>
            </div>
        </>
        

    )
}

export default Navbar