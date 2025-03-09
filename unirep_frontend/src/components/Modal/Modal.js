import "./Modal.css";

const Modal = ({ handleOpenModal, handleCloseModal }) => {
    return (
        <div className="modal-overlay" onClick={handleOpenModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Detalhes da Conta</h3>
                <p><strong>Nome:</strong> Conta de Luz</p>
                <p><strong>Valor:</strong> R$ 150,00</p>
                <button className="close-btn" onClick={handleCloseModal}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal;