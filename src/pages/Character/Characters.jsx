import '../../style/page-styles/pageTemplate.css'
import Links from "../../components/Links"
// import Carousel from "../components/Carousel_Component/Carousel"
import CharacterSearchFunction from "../../components/Character_Search_Components/SearchFunction"
function Character() {
    return (
        <>
            <h2>Characters</h2>
            <div className="pageContainer">
                <div className="previewSection w3-animate-top">
                    <h1>Character Search:</h1>
                    <CharacterSearchFunction/>
                    {/* <Carousel/> */}
                </div>
                <Links/>
            </div>
        </>
        
    )
}

export default Character