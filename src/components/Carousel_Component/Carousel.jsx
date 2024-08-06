import { useEffect } from 'react'
import carouselStyles from './Carousel.module.css'

/**
 * Used to create a preview for items in the Home page
 * for either current banners/events/news/resources for players
 * 
 */
function Carousel(){   
    useEffect(()=>{
        let copy = document.querySelector(`.${carouselStyles.carouselItems}`).cloneNode(true)
        document.querySelector(`.${carouselStyles.carouselContainer}`).appendChild(copy)
    })

    return(
        <div className={carouselStyles.carouselContainer}>
            <div className={carouselStyles.carouselItems}>
                <img src="./news-preview/himiko.png"/>
                <img src="./news-preview/seele.png"/>
                <img src="./news-preview/silver-wolf.png"/>
            </div>
        </div>
    )
}

export default Carousel