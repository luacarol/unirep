import "./Modal.css";
import ButtonIcon from "../Buttons/ButtonIcon/ButtonIcon";

const Modal = ({ className, title, handleOpenModal, handleCloseModal, infos }) => {
    return (
        <div className={`modal-overlay ${className}`} onClick={handleOpenModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="title-button">
                    <h3 className="minor-subtitle">{title}</h3>
                    <ButtonIcon iconClass="fa-solid fa-xmark" onClick={handleCloseModal} onlyIcon={true}/>
                </div>

                <div className="infos">
                    {infos}
                </div>
            </div>
        </div>
    )
}

export default Modal;