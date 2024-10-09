import Image from "next/image"

const Mailing: React.FC = () =>{
    return(
        <div className="relative flex max-h-[100vh] h-[100vh] justify-center items-center">
            <Image
                unoptimized
                className="w-[100%] object-cover -z-[1] opacity-20" 
                src="/honkai-star-rail-black-swan.gif" 
                alt="menu icon" 
                fill={true}
            />
            <div className="border-2 border-gray-600 rounded-md bg-gray-600 min-w-[50%] p-[3%]">
                <Image
                    unoptimized
                    className="max-w-[5rem] min-w-[5rem]" 
                    src="/kafka-mailing.svg" 
                    width={0} 
                    height={0} 
                    alt="mailing icon"
                />
                <div className="pl-[0.5em] m-[1em]">
                    <h2 className="text-[1.65em] pb-6">
                        Never miss a drop! 
                        Receive updates for new characters!
                    </h2>
                    <p className="pb-2">Enter your email here!</p>
                    <div className="border-2 border-yellow-500 rounded-[0.3em] bg-yellow-500  text-black flex justify-center p-5">
                        Sign up!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mailing;