import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"
import Carousel from "../components/Carousel_Component/Carousel"

function Home() {
    return (
        <>
            <div className="pageContainer">                
                <div className="previewSection">
                    <h1>News</h1>
                    <Carousel/>
                </div>
                <Links/>
            </div>
        </>   
    )
}

export default Home