import '../../style/page-styles/pageTemplate.css'
import CharacterSearchFunction from "../../components/Character_Search_Components/SearchFunction"

function CharacterSearch() {
    return (
        <>
            <h2>Characters</h2>
            <div className="pageContainer">
                <div className="previewSection">
                    <h1>Character Search:</h1>
                    <CharacterSearchFunction/>
                    {/* <Carousel/> */}
                </div>
            </div>
        </>
        
    )
}

export default CharacterSearch