import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"
import Carousel from "../components/Carousel_Component/Carousel"
import SearchFunction from "../components/Character_Search_Components/SearchFunction"
function Character() {
    return (
        <>
            <h2>Characters</h2>
            <div className="pageContainer">
                <div className="previewSection w3-animate-top">
                        <SearchFunction/>
                        {/* <Carousel/> */}
                </div>
                <Links/>
            </div>
        </>
        
    )
}

export default Character