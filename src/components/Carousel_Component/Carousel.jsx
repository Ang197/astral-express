import '../../style/Carousel_Components_CSS/carousel.css';
import CarouselItems from "./CarouselItems";
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

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = 0;
        } else if (newIndex >= items.length){
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex)
    };

    return(
        <div className="carousel">
            <div className="carouselContainer"
                    style={{transform: `translate(-${activeIndex * 100}%)`
                }}
            >
                {items.map((item) => {
                    return <CarouselItems item={item} width={"100%"}/>;
                })}
            </div>

            <div 
                className="carouselButtons">
                <button 
                    onClick={()=>{
                        updateIndex(activeIndex - 1);
                    }} 
                    className="buttonArrow">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>{" "}
                </button>

                <div className="carouselIndicators">
                    {items.map((item, index) => {
                        return(
                            <button 
                                onClick={()=>{
                                    updateIndex(index);
                                }} 
                                className="carouselIndicatorButtons">
                            <span 
                                className={`material-symbols-outlined ${
                                    index===activeIndex 
                                    ?"indicatorSymbol:active"
                                    :"indicatorSymbol"
                                    }`}
                                >
                                radio_button_checked
                            </span>
                        </button>
                        )
                    })}
                </div>

                <button 
                    onClick={()=>{
                        updateIndex(activeIndex + 1);
                    }} 
                    className="buttonArrow">
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </div>
    )
}

export default carousel