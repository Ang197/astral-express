import '../style/page-styles/pageTemplate.css'
import Carousel from "../components/Carousel_Component/Carousel"
import Links from "../components/Links"

function Home() {
    return (
        <>
            <div className="pageContainer">                
                <div className="previewSection w3-animate-top">
                    <h2>News</h2>
                    <Carousel/>
                </div>
                <Links/>
            </div>
        </>   
    )
}

export default Home