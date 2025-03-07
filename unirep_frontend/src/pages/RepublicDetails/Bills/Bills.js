import React, { useState, useEffect } from "react";
import "./Bills.css";

const Bills = () => {
    const [bills, setBills] = useState([]);

    // Definindo as contas apenas uma vez na montagem do componente
    useEffect(() => {
        setBills([
            { id: 1, name: "Conta de Luz", amount: 120, dueDate: "10/03/2025", status: "Não Pago" },
            { id: 2, name: "Conta de Água", amount: 80, dueDate: "15/03/2025", status: "Pago" },
            { id: 3, name: "Conta de Internet", amount: 100, dueDate: "20/03/2025", status: "Não Pago" },
        ]);
    }, []); // O array vazio [] garante que isso rode apenas na primeira renderização.

    const handlePayBill = (id) => {
        setBills((prevBills) =>
            prevBills.map((bill) =>
                bill.id === id ? { ...bill, status: "Pago" } : bill
            )
        );
    };

    return (
        <section className="bills-section">
            <h3 className="bigger-subtitle">💵 Itens à Pagar</h3>
            <div className="content">
                {bills.length > 0 ? (
                    <table>
                        <thead>
                            <tr className="legend">
                                <th>Conta</th>
                                <th>Valor</th>
                                <th>Vencimento</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="smaller-text">
                            {bills.map((bill) => (
                                <tr key={bill.id}>
                                    <td>{bill.name}</td>
                                    <td>R$ {bill.amount}</td>
                                    <td>{bill.dueDate}</td>
                                    <td>
                                        {bill.status === "Pago" ? (
                                            <span className="status-paid">Pago</span>
                                        ) : (
                                            <button
                                                className="status-unpaid"
                                                onClick={() => handlePayBill(bill.id)}
                                            >
                                                Pagar
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Sem itens à pagar no momento.</p>
                )}
            </div>
        </section>
    );
};

export default Bills;
