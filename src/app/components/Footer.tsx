import Image from "next/image";

const Footer: React.FC = () =>{
    return(
        <div className="relative bottom-0">
            <Image
                unoptimized
                className="w-[100%] max-h-[50em] object-cover -z-[1]" 
                src="/star_rail_bg.png" 
                alt="menu icon" 
                fill={true}
            />
            <footer className="flex flex-col justify-between h-full relative p-4 pt-7 text-gray-400">
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-row justify-center space-x-[4em] mb-4">
                        <p>Terms of Service</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <p className="flex justify-center text-sm mb-4">
                        All logos and assests are property of their respective owners
                    </p>
                    <div className="logos flex flex-row justify-evenly mb-4">
                        <Image src="/hsr_logo.svg" width={200} height={0} alt="Honkai Star Rail Logo"/>
                        <Image src="/esrb.svg" width={175} height={0} alt="ESRB Image"/>
                        <Image src="/hoyoverse_logo.svg" width={200} height={0} alt="Hoyoverse Logo"/>
                    </div>
                </div>
                <p className="text-sm pl-[8em]">© Ang197 All Rights Reserved</p>
            </footer>
        </div>
    )
};

export default Footer;