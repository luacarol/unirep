import React from "react";

const UserRepublic = ({ republic }) => {
    return (
        <div>
            <h3>Você está alocado na república:</h3>
            <div className="republic-card">
                <h4>{republic.name}</h4>
                <p>Aluguel: R$ {republic.rent}</p>
                <p>Membros: {republic.members}</p>
            </div>
        </div>
    );
};

export default UserRepublic;
