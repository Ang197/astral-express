import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"

function Home() {
    return (
        <>
            <div className="pageContainer">                
                <div className="previewSection w3-animate-top">
                    <h2>News</h2>
                </div>
                <Links/>
            </div>
        </>   
    )
}

export default Home