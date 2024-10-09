import Image from "next/image"

const PromoArea: React.FC = () => {
    return(
        <div className="relative max-h-[100vh] h-[100vh]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-[4rem] font-semibold flex justify-center">All aboard the express!</h3>
                <p className="text-[1.5rem]">An all in one place for all your Honkai Star Rail info!</p>
            </div>
            <video className="absolute w-[100%] h-[100%] object-cover -z-[100000] opacity-50"autoPlay muted loop>
                <source src="astral-express-video.mp4" type="video/mp4"/>
            </video>
            {/* <Image
                unoptimized
                className="w-[100%] object-cover -z-[1] opacity-30" 
                src="/honkaistarrail-train.gif" 
                alt="menu icon" 
                fill={true}
            /> */}
            
        </div>
    );
}

export default PromoArea;