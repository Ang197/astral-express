import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"
import Carousel from "../components/Carousel_Component/Carousel"

function Weapons() {
    const items = [
        {
            Image: "lc-preview/blackswan-lc.png",
        },
        {
            Image: "lc-preview/sam-lc.png",
        },
        {
            Image: "lc-preview/sparkle-lc.png",
        },
    ];
    return (
        <>
            <div className="pageContainer">
                <div className="previewSection w3-animate-top">
                        <h2>Light Cones</h2>
                        <div className="lightConeContainer">
                        <Carousel image1={items[0].Image} image2={items[1].Image} image3={items[2].Image}/>
                        </div>
                    </div>
                    <Links/>
            </div>
        </>
        
    )
}

export default Weapons