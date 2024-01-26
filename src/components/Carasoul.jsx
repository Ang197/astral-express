import '../style/carasoul.css'

function Carasoul(){

    // let carousel = document.getElementsByClassName('carousel')[0],
    //     slider = carousel.getElementsByClassName('carouselSlider')[0],
    //     items = carousel.getElementsByClassName('carouselSliderItem'),
    //     prevBtn = carousel.getElementsByClassName('carouselPrev')[0],
    //     nextBtn = carousel.getElementsByClassName('carouselNext')[0];

    // let width, height, totalWidth, margin = 20,
    //     currIndex = 0,
    //     interval, intervalTime = 4000;

    //     function init(){
    //         resize();
    //         move(Math.floor(items.length/2));
    //         bindEvents();
    //         timer();
    //     }

    //     function resize(){
    //         width = Math.max(window.innerWidth * 0.25, 275),
    //         height =window.innerHeight * .5,
    //         totalWidth = width * items.length;

    //         slider.style.width = totalWidth + "px";
    //     }

    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="carousel">
                <div className="carouselBody">
                    <div className="carouselPrev">
                        <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="carouselNext">
                        <i className="fa fa-angle-right"></i>
                    </div>
                    <div className="carouselSlider">
                        <div className="carouselSliderItem">
                            <div className="item3dFrame">
                                <div className="item-3d-box item-3d-frame--front">
                                    <h1>1</h1>
                                </div>
                                <div className="item-3d-box item-3d-frame--left"></div>
                                <div className="item-3d-box item-3d-frame--right"> </div>
                            </div>
                        </div>
                        <div className="carouselSliderItem">
                            <div className="item3dFrame">
                                <div className="item-3d-box item-3d-frame--front">
                                    <h1>2</h1>
                                </div>
                                <div className="item-3d-box item-3d-frame--left"></div>
                                <div className="item-3d-box item-3d-frame--right"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carasoul