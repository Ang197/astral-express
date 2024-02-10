import Carousel from "react-bootstrap/Carousel"
import {useState} from "react";

/**
 * Used to create a preview for items in the Home page
 * for either current banners/events/news/resources for players
 * 
 */
function carousel(){
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            Image: require("../../media/hsr-1.png"),
        },
        {
            Image: require("../../media/himiko-lc.png"),
        },
        {
            Image: require("../../media/silverWolf-lc.png"),
        },
        {
            Image: require("../../media/seele-lc.png"),
        },
    ];
    
    return(
        <>
        </>
    )
}

export default carousel