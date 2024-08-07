import modalStyles from "./Modal.module.css"

function Modal() {
    return (
        <div className={modalStyles.modal}>Modal
            <button className={modalStyles.modalCloseBtn}>&times;</button>
            <h2>Modal</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quidem consequuntur nesciunt id. Magnam aut, suscipit alias quo dolore, amet reprehenderit architecto ducimus accusamus ullam fugiat. 
                Dolores dolor minus voluptatum fugiat!</p>
        </div>
    )
}

export default Modal