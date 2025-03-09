import "./RepublicInfo.css";
import defaultRepublicPicture from "../../../assets/images/undraw_small_town_re_7mcn 1.svg"
import ButtonLine from "../../../components/Buttons/ButtonLine/ButtonLine";

const RepublicInfo = () => {
    return (
        <section className="republic-section">
            <h3 className="bigger-subtitle">Informações da República</h3>

            <div className="content">
                <div><img className="republic-img" src={defaultRepublicPicture} alt="Republic logo" /></div>

                <div className="basic-infos">
                    <label className="legend">Nome da República</label>
                    <label className="smaller-text description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</label>
                </div>

                <div className="basic-infos">
                    <label className="smaller-text">Contato do Representante</label>
                    <label className="smaller-text">Quantidade de Membros</label>
                </div>

                <div className="basic-infos">
                    <ButtonLine text="Endereço"/>
                    <ButtonLine text="Imagens e Vídeos"/>
                </div>
            </div>
        </section>
    )
}

export default RepublicInfo;