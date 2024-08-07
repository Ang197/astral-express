import { createPortal } from "react-dom";
import Modal from "./Modal_Component/Modal";
const mountElement = document.getElementById("overlays")

function Overlays({ isOpen }) {
    return (
        createPortal(
            <>
                {isOpen && <Modal/>}
            </>  
            , mountElement)
    )
}

export default Overlays