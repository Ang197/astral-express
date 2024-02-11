import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";
import '../../style/carousel.css'

/**
 * Used to create a preview for items in the Home page
 * for either current banners/events/news/resources for players
 * 
 */
function carousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    const items = [
        {
            Image: require("media/himiko-lc.png"),
        },
        {
            Image: require ("media/silverWolf-lc.png"),
        },
        {
            Image: require("media/seele-lc.png"),
        },
    ];
    
    return(
        <div className="carouselContainer">
            <Carousel activeIndex={index} 
                    onSelect={handleSelect}>
                <Carousel.Item >
                    <img className="carouselImage" src="media/himiko-lc.png"/> 
                </Carousel.Item>
                <Carousel.Item >
                    <img className="carouselImage" src="media/seele-lc.png"/>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="carouselImage" src="media/silverWolf-lc.png"/>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default carousel