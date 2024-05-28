import '../../style/nav.css';
import Navbar from "./NavBar"

function Header(){
    return(
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
                    <Navbar />
                    <h1 className="headerTitle">Astral Express</h1>
                </div>
            </header>
        </>
    )
}

export default Header