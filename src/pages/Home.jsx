import '../style/page-styles/pageTemplate.css'
import Carousel from "../components/Carousel_Component/Carousel"
import Links from "../components/Links"

function Home() {
    const items = [
        {
            Image: "news-preview/himiko-lc.png",
        },
        {
            Image: "news-preview/silverWolf-lc.png",
        },
        {
            Image: "news-preview/seele-lc.png",
        },
    ];

    return (
        <>
            <div className="pageContainer">                
                <div className="previewSection w3-animate-top">
                    <h2>News</h2>
                    <Carousel image1={items[0].Image} image2={items[1].Image} image3={items[2].Image}/>
                </div>
                <Links/>
            </div>
        </>   
    )
}

export default Home