import '../style/page-styles/pageTemplate.css'
import Links from "../components/Links"

function About() {
    return (
        <>
            <div className="pageContainer">
                <div className="previewSection w3-animate-top">
                        <h1>About us</h1>
                        <p className="description">
                            Astral Express is a resource website for Honkai Star Rail players.
                            Need information for characters or light cones? Astral Express is
                            here to help.

                            We can be able to provide the latest updates/patches, newest banners,
                            or any tutorials to help anyone start out their Honkai Star Rail journey.
                        </p>
                        <h1>Credits</h1>
                        <p className="creditsLink">
                            Github: <a className="githubLink" href="https://github.com/Ang197" target="_blank"> Ang197 </a>
                        </p>
                </div>
                    <Links/>
            </div>
        </>
        
    )
}

export default About