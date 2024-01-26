import { useState, useEffect } from "react";


function WindowSize() {
    const [size, setSize] = useState([
        window.innerHeight,
        window.innerWidth
    ]);

    useEffect(() => {
        //Will execute handler if it's being executed in a web page
        if (typeof window !== "undefined") {
            function handleResize() {
                //Sets the window static size based on its state
                setSize([
                    window.innerHeight,
                    window.innerWidth
                ]);
            };

            //Use event listener to allow window changes
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            return () => {
                window.removeEventListener("resize", handleResize);
            }
        }
    }, []);
    return size;
}

export default WindowSize