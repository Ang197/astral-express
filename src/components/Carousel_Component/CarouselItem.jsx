import '../../style/Carousel_Components_CSS/carouselItem.css'

function carouselItem({item}){
    return(
        <div className="carouselItem">
            <img className="carouselImage" src={item.icon}/>
            <div className="carouselTitle">{item.title}</div>
            <div className="carouselDescription">{item.description}</div>
        </div>
    )
}

export default carouselItem