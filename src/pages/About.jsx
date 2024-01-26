import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"

function About() {
    return (
        <>
            <h1 className="pageTitle">About us</h1>
            <div className="pageContainer">
                
                <div className="previewSection">
                        <h1>Preview</h1>
                        <h2 className="description">
                            Astral Express is a resource website for Honkai Star Rail players.
                            Need information for characters or light cones? Astral Express is
                            here to help.
                        </h2>
                </div>
                    <Links/>
            </div>
        </>
        
    )
}

export default About