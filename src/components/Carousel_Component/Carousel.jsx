import '../../style/Carousel_Components_CSS/carousel.css';
import CarouselItem from "./CarouselItem";
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
            icon: require("../../media/react.svg"),
            title:"React",
            description:"Blah blah"
        },
    ];

    return(
        <div className="carousel">
            <div className="carouselContainer"
                    style={{transform: `translate:(-${activeIndex *100})`}}
            >
                {items.map((item) => {
                    return <CarouselItem item={item}/>;
                })}
            </div>
        </div>
    )
}

export default carousel