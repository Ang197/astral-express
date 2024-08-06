import '../style/page-styles/pageTemplate.css'
// import styles from '../style/css-modules/lightCone.module.css';
// import Carousel from "../components/Carousel_Component/Carousel"
import WeaponSearchFunction from "../components/Light_Cone_Search_Components/SearchFunction"

function Weapons() {
    // const items = [
    //     {
    //         id: 1,
    //         path: "lc-preview/blackswan-lc.png",
    //     },
    //     {
    //         id: 2,
    //         path: "lc-preview/sam-lc.png",
    //     },
    //     {
    //         id: 3,
    //         path: "lc-preview/sparkle-lc.png",
    //     },
    // ];

    // const lcPreviewItems = items.map((x) =>(
    //     <div key={x.id}>
    //         <img className={styles.customLCpreview} src={x.path}/>
    //     </div>
    // ))

    return (
        <>
            <div className="previewSection weaponSection">
                <h2>Light cones</h2>
                    <WeaponSearchFunction/>
                    {/* <div className="lightConeContainer">
                        <Carousel 
                            // image1={lcPreviewItems[0].props.children.props.src}
                            // image2={lcPreviewItems[1].props.children.props.src} 
                            // image3={lcPreviewItems[2].props.children.props.src}
                        />
                    </div> */}
                </div>
                {/* <Links/> */}
        </>
        
    )
}

export default Weapons