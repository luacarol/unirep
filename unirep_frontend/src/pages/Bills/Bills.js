import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Bills.css";

const Bills = () => {
    const { user } = useAuth(); // Pegando o usuário logado
    const [bills, setBills] = useState([]);

    // Simulação de dados das contas (pode ser substituído por uma API real)
    useEffect(() => {
        if (user) {
            setBills([
                { id: 1, name: "Conta de Luz", amount: 120, status: "Não Pago" },
                { id: 2, name: "Conta de Água", amount: 80, status: "Pago" },
                { id: 3, name: "Conta de Internet", amount: 100, status: "Não Pago" },
            ]);
        }
    }, [user]);

    return (
        <div>
            <h2>Itens à Pagar da República</h2>
            {bills.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Conta</th>
                            <th>Valor</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr key={bill.id}>
                                <td>{bill.name}</td>
                                <td>R$ {bill.amount}</td>
                                <td>{bill.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Sem itens à pagar no momento.</p>
            )}
        </div>
    );
};

export default Bills;
