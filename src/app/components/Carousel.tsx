"use client"

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"
import { useState, useEffect, useRef } from "react";

interface CarouselProps{
    items: { 
        id: number;
        name: string;
        description: string;
        img: string;
    }[];
}

type Direction = 'next' | 'prev';

const Carousel: React.FC<CarouselProps> = ({items}): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [direction, setDirection] = useState<Direction>('next');
    const intervalRef = useRef<NodeJS.Timeout | null>(null) // Ref has the interval ID

    const startInterval = () => {
        // Clears the existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }


        intervalRef.current = setInterval(() => {
            setDirection('next');
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % items.length;
                return nextIndex;
            })
        }, 6000);
    };

    useEffect(() => {
        startInterval();

        return () => {
            if(intervalRef.current) {
                clearInterval(intervalRef.current); // Clears the interval once useEffect changes the image on screen after 3000 ms
            }
        }
    }, [items.length])
    
    const handleIndexChange = (newIndex: number) => {
        const isNext: boolean = newIndex > currentIndex;
        setDirection(isNext ? 'next' : 'prev');
        setCurrentIndex(newIndex);

        startInterval(); // Resets the current interval everytime the index changes when the user presses a nav button
    }

    if(items.length === 0){
        return <div>Loading...</div>
    };
    
    return(
        <div className="pb-6 bg-slate-950">
            <h1 className="font-light text-3xl pl-8 pt-4">Characters</h1>
            <div className="h-[100vh] flex justify-center items-center">
            <AnimatePresence>
                {items.length > 0 && (
                    <motion.div
                        key={items[currentIndex].id}
                        initial={{opacity: 0, x: direction === 'next' ? '100%' : '-100%'}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: direction === 'next' ? '-100%' : '100%'}}
                        transition={{duration: 0.5}}
                        className="absolute"
                    >
                        <div>
                            <Image
                                src={`/charImages/${items[currentIndex].img}`} 
                                alt={`${items[currentIndex].name} image`} 
                                unoptimized
                                width={1000}
                                height={100}
                            />
                        </div>
                    </motion.div>
                    )
                }
            </AnimatePresence>
            </div>
            <h1 className="font-light text-3xl pl-8 pb-8">Check Now! &#8594;</h1>
        </div>
    )
}

export default Carousel;


{/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 hidden">
    {items.map((_, index) => (
        <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => handleIndexChange(index)}
        />
    ))}
</div> */}