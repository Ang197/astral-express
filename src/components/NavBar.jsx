import '../style/nav.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import Search from '../components/Search'

function Navbar() {
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
        <nav className="navbar" ref={navRef}> {/*//The useRef Hook allows you to persist values between renders.*/}
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