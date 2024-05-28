// import Carousel from "react-bootstrap/Carousel"
// import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";
import '../../style/carousel.css'

/**
 * Used to create a preview for items in the Home page
 * for either current banners/events/news/resources for players
 * 
 */
function carousel(props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    
    return(
        <div className="carouselContainer">
            {/* <Carousel activeIndex={index} 
                    onSelect={handleSelect}>
                <Carousel.Item >
                    <img className="carouselImage" src={props.image1}/> 
                </Carousel.Item>
                <Carousel.Item >
                    <img className="carouselImage" src={props.image2}/>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="carouselImage" src={props.image3}/>
                </Carousel.Item>
            </Carousel> */}
        </div>

    )
}

export default carousel