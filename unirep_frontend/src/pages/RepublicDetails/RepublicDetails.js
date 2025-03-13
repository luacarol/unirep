import MemberCard from "../../components/MemberCard/MemberCard";
import Bills from "./Bills/Bills";
import "./RepublicDetails.css";
import RepublicInfo from "./RepublicInfo/RepublicInfo";

const mockMembers = [
    {
        name: "Luana dos Anjos",
        age: 22,
        course: "Análise e Desenvolvimento de Sistemas",
        hobby: "Jogar futebol",
        dislikes: "Cozinhar",
        socialization: "Introvertido",
        hasSkills: "Sim",
        contributions: ["Limpar banheiro", "Tirar pó de armários"]
    },
    {
        name: "Carlos Ferreira",
        age: 25,
        course: "Engenharia Civil",
        hobby: "Tocar violão",
        dislikes: "Acordar cedo",
        socialization: "Extrovertido",
        hasSkills: "Não",
        contributions: ["Lavar louça", "Organizar a sala"]
    },
    {
        name: "Mariana Souza",
        age: 21,
        course: "Psicologia",
        hobby: "Ler livros",
        dislikes: "Lugares barulhentos",
        socialization: "Introvertida",
        hasSkills: "Sim",
        contributions: ["Cozinhar", "Regar as plantas"]
    },
    {
        name: "Pedro Oliveira",
        age: 23,
        course: "Medicina",
        hobby: "Correr no parque",
        dislikes: "Ficar muito tempo no celular",
        socialization: "Meio termo",
        hasSkills: "Sim",
        contributions: ["Fazer compras", "Levar o lixo para fora"]
    }
];

const RepublicDetails = () => {
    return (
        <div className="republic-details">
            <h2 className="bigger-subtitle">🏠 Detalhes da Moradia!</h2>

            <RepublicInfo />

            <Bills />

            <section className="section members-section">
                <h3 className="bigger-subtitle">Membros</h3>

                <div className="members-grid">
                    {mockMembers.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RepublicDetails;
