import '../../style/page-styles/pageTemplate.css'
// import Carousel from "../components/Carousel_Component/Carousel"
import CharacterSearchFunction from "../../components/Character_Search_Components/SearchFunction"
function Character() {
    return (
        <>
            <div className="previewSection characterSection">
                <h2>Characters</h2>
                <CharacterSearchFunction/>
                {/* <Carousel/> */}
            </div>
        </>
        
    )
}

export default Character