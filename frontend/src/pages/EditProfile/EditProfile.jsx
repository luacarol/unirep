import styles from './EditProfile.module.css';
import Layout from '../../components/Layout/Layout';
import userVector from '../../assets/images/user-vector.png';
import ButtonLabelIcon from '../../components/Buttons/ButtonLabelIcon/ButtonLabelIcon';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import ButtonLabel from '../../components/Buttons/ButtonLabel/ButtonLabel';
import InputLabel from '../../components/Inputs/InputLabel/InputLabel';
import CheckboxGroup from '../../components/CheckboxGroup/CheckboxGroup';

const EditProfile = () => {
    return (
        <Layout content={
            <div className={styles.container}>

                <h1 className={`title ${styles.title}`}>Editar Perfil</h1>

                <div className={styles.imageAndSaveButton}>

                    <div className={styles.imageAndChangeButton}>

                        <div className={styles.imgUser}>
                            <img src={userVector} alt="User Vector" />
                        </div>

                        <ButtonLabelIcon icon={faUpload} text="Trocar foto" />

                    </div>

                    <ButtonLabel text="Save" />

                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Dados Pessoais</h2>

                    <div className={styles.gridInputs}>
                        <InputLabel label="Nome completo" type="text" placeholder="Luana Caroliny Pedroso dos Anjos" />
                        <InputLabel label="Idade" type="int" placeholder="24 anos" />
                    </div>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Gênero"
                            options={['Feminino', 'Masculino', 'Outro']}
                        />

                        <CheckboxGroup
                            labelTitle="Curso Universitário"
                            options={['Ciências Exatas', 'Ciências Biológicas', 'Ciências Humanas', 'Ciências Sociais Aplicadas', 'Artes', 'Tecnológicos']}
                        />
                    </div>

                    {/* Ano de Ingreso */}
                    {/* Universidade */}
                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Preferências de Moradia</h2>

                    {/* Região desejada para a moradia (bairro/cidade) */}

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Tipo de moradia preferida"
                            options={['Casa', 'Apartamento']}
                        />

                        <CheckboxGroup
                            labelTitle="Tipo de acomodação preferida"
                            options={['Quarto individual', 'Quarto compartilhado']}
                        />
                    </div>

                    {/* Região desejada para a moradia (bairro/cidade) */}
                    {/* Distância máxima da universidade */}

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Fumante?"
                            options={['Sim', 'Não']}
                        />
                        <CheckboxGroup
                            labelTitle="Aceita animais de estimação?"
                            options={['Sim', 'Não']}
                        />
                    </div>

                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Hábitos de Vida e Convivência</h2>

                    {/* Horário de sono  */}
                    {/* Recebe visitas com frequência? */}
                    {/* Frequência de saídas */}

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Horário de estudo"
                            options={['Manhã', 'Tarde', 'Noite']}
                        />

                        <CheckboxGroup
                            labelTitle="Organização e limpeza"
                            options={['Muita importância', 'Mediana', 'Pouca']}
                        />
                    </div>

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Nível de socialização"
                            options={['Gosta de interações sociais constantes', 'Prefere mais privacidade']}
                        />
                        <CheckboxGroup
                            labelTitle="Preferências de alimentação"
                            options={['Vegetariano', 'Vegano', 'Carnívoro']}
                        />
                    </div>

                </div>

                <div className={styles.section}>
                    <h2 className={`subtitle`}>Perfil de Personalidade</h2>

                    {/* Gostos em comum (Filmes, séries, esportes, hobbies) */}

                    <div className={styles.gridInputs}>
                        <CheckboxGroup
                            labelTitle="Teste de personalidade ou traços predominantes"
                            options={['Introvertido', 'Extrovertido']}
                        />

                        <CheckboxGroup
                            labelTitle="Preferências por ambientes"
                            options={['Calmos ', 'Agitados']}
                        />
                    </div>

                </div>

            </div>
        } />
    )
}

export default EditProfile;