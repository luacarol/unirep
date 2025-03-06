import republicImage from "../../../assets/images/undraw_small_town_re_7mcn 1.svg";
import "./RepublicInfo.css";

const RepublicInfo = () => {
    return (
        <section className="republic-section">
            <h3 className="bigger-subtitle">🏠 Informações da República</h3>

            <div className="name-contact-address">
                <div className="name-contact">
                    <div className="label-value">
                        <label className="legend">Nome da República:</label>
                        <label className="smaller-text">Nome da República</label>
                    </div>

                    <div className="label-value">
                        <label className="legend">Contato do representante:</label>
                        <label className="smaller-text">(12) 982173929</label>
                    </div>
                </div>

                <div className="label-value">
                    <label className="legend">Endereço:</label>
                    <label className="smaller-text">Endereço. Bairro</label>
                    <label className="smaller-text">CEP. Cidade. Estado</label>
                </div>
            </div>

            <div className="qtd-members-imgs-videos">
                <div className="qtd-members-itens-value">
                    <div className="label-value">
                        <label className="legend">Quantidade de Membros:</label>
                        <label className="smaller-text">4 membros</label>
                    </div>

                    <div className="label-value">
                        <label className="legend">Valor total dos itens:</label>
                        <label className="smaller-text">R$ 450,00</label>
                    </div>
                </div>

                <div className="label-value imgs-videos-section">
                    <label className="legend">Imagens e Vídeos:</label>

                    <div className="imgs-video">
                        <img src={republicImage} alt="Republic logo" />
                        <img src={republicImage} alt="Republic logo" />
                        <img src={republicImage} alt="Republic logo" />
                        <img src={republicImage} alt="Republic logo" />
                        <img src={republicImage} alt="Republic logo" />
                        <img src={republicImage} alt="Republic logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RepublicInfo;