import navStyles from './Nav.module.css';
import { menuItems } from './menuItems'
import { FaBars } from "react-icons/fa";
import { useRef } from 'react';
import { useState } from 'react';

import Overlays from '../../components/Overlays.jsx'

// import About from "../../pages/About/About"

/**
 * Used to hold links for the other pages as well
 * as the header for the entire website
 * 
 * The useRef Hook allows you to persist values between renders.
 */

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    // useRef and Arrow function used when the screen only fits on Mobile size or smaller
    const navRef = useRef();
    
    const showNavBar = () => {
        navRef.current.classList.toggle(navStyles.responsive_nav)
        navRef.current.classList.toggle(navStyles.overlay)
    }

    return (
        <>
            <Overlays isOpen={isOpen}/>
            <header className={navStyles.headerNavbar}>
                <nav className={navStyles.navbar} ref={navRef}>
                    <ul className={navStyles.navLinks}>
                        {menuItems.map((menu, index) => {
                            return (
                                <li key={index}>
                                    <a href={menu.url}>{menu.title}</a>
                                </li>
                            )
                        })}
                    </ul>

                    <button className={`${navStyles.navCloseBtn}`} onClick={showNavBar}>
                        <FaBars />
                    </button>

                </nav>
                
                <p onClick={()=> setIsOpen(true)} className={navStyles.aboutBtn}>About</p>

                <button
                    className={navStyles.navBtn}
                    onClick={showNavBar}>
                    <FaBars />
                </button>

            </header>
        </>


    )
}

export default Navbar