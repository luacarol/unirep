import "./Modal.css";
import ButtonIcon from "../Buttons/ButtonIcon/ButtonIcon";

const Modal = ({ handleOpenModal, handleCloseModal, infos }) => {
    return (
        <div className="modal-overlay" onClick={handleOpenModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="minor-subtitle">Detalhes da Conta</h3>

                <div className="infos">
                    {infos}
                </div>

                <ButtonIcon text="Ok" iconClass="fa-solid fa-check" onClick={handleCloseModal}/>
            </div>
        </div>
    )
}

export default Modal;