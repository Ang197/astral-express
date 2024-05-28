import '../style/page-styles/pageTemplate.css'
import styles from '../style/css-modules/home.module.css';
import Carousel from "../components/Carousel_Component/Carousel"
import Links from "../components/Links"

function Home() {
    const items = [
        {
            path: "news-preview/himiko-lc.png",
        },
        {
            path: "news-preview/silverWolf-lc.png",
        },
        {
            path : "news-preview/seele-lc.png",
        },
    ];

    const homePreviewItems = items.map((x) =>(
        <div key={x.id}>
            <img className={styles.customHomePreview} src={x.path}/>
        </div>
    ))

    return (
        <>
            <h2>News</h2>
            <div className="pageContainer">                
                <div className="previewSection">
                    {/* <Carousel 
                        // image1={homePreviewItems[0].props.children.props.src}
                        // image2={homePreviewItems[1].props.children.props.src} 
                        // image3={homePreviewItems[2].props.children.props.src}
                    /> */}
                </div>
                <Links/>
            </div>
        </>   
    )
}

export default Home