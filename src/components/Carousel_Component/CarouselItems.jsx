import '../../style/Carousel_Components_CSS/carouselItems.css'

function carouselItem({item}){
    return(
        <div className="carouselItem">
            <img className="carouselImage" src={item.Image}/>
        </div>
    )
}

export default carouselItem