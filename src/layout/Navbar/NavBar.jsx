import '../../style/nav.css';
import { menuItems } from './menuItems'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';

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
            <div className="headerNavbar">
                <nav className="navbar" ref={navRef}> 
                    <ul className="navLinks">
                        {menuItems.map((menu, index) => {
                            return(
                                <li key={index}>
                                    <a href={menu.url}>{menu.title}</a>
                                </li>
                            )
                        })}
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