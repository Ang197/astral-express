import Image from "next/image";

const NavBar: React.FC = () =>{
    return (
        <nav className="navbar p-8 z-1 bg-[#181414] flex items-center max-h-16 justify-between">
            <Image src="/Hamburger_icon.svg" alt="menu icon" width={35} height={40}/>
            <Image src="/Logo.svg" alt="menu icon" width={400} height={40}/>
            <Image src="/Magnifying_glass_icon.svg" alt="search icon" width={30} height={40}/>
        </nav>
    );
}

export default NavBar;