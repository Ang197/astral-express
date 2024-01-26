import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"
import Carasoul from "../components/Carasoul"

function Home() {
    return (
        <>
            <h1 className="pageTitle">Home</h1>
            <div className="pageContainer">                
                <div className="previewSection">
                    <h1>Preview</h1>
                    <Carasoul/>
                </div>
                <Links/>
            </div>
        </>   
    )
}

export default Home