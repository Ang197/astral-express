import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"

function Character() {
    return (
        <>
            <h1 className="pageTitle">Characters</h1>
            <div className="pageContainer">
                <div className="previewSection">
                        <h1>Preview</h1>
                    </div>
                    <Links/>
            </div>
        </>
        
    )
}

export default Character