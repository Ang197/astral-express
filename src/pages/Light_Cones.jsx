import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"
import Carousel from "../components/Carousel_Component/Carousel"

function Weapons() {
    return (
        <>
            <div className="pageContainer">
                <div className="previewSection w3-animate-top">
                        <h2>Light Cones</h2>
                        <Carousel/>
                    </div>
                    <Links/>
            </div>
        </>
        
    )
}

export default Weapons