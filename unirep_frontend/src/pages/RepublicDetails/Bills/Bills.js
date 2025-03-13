import React, { useState, useEffect } from "react";
import "./Bills.css";
import BillCard from "../../../components/BillCard/BillCard";

const Bills = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        // Simulação do recebimento de dados de uma API
        const fetchBills = async () => {
            const fakeData = [
                {
                    id: 1,
                    name: "Conta de Água",
                    amount: 70.0,
                    total: 280.0,
                    members: 4,
                    description:
                        "A conta de água é compartilhada entre todos os moradores. O valor médio total costuma ser de R$ 280,00, dividido entre 4 membros, resultando em um valor de R$ 70,00 por pessoa.",
                },
                {
                    id: 2,
                    name: "Conta de Luz",
                    amount: 60.0,
                    total: 240.0,
                    members: 4,
                    description:
                        "A conta de luz é dividida igualmente entre os moradores. O custo médio mensal é de R$ 240,00, ficando R$ 60,00 por pessoa.",
                },
                {
                    id: 3,
                    name: "Internet",
                    amount: 50.0,
                    total: 200.0,
                    members: 4,
                    description:
                        "A conta de internet tem um valor fixo de R$ 200,00, dividido entre os 4 moradores, resultando em um custo de R$ 50,00 por pessoa.",
                },
            ];

            setBills(fakeData);
        };

        fetchBills();
    }, []);

    return (
        <section className="bills-section">
            <h3 className="bigger-subtitle">Itens a Pagar</h3>

            <div className="bill-grid">
                {bills.map((bill) => (
                    <BillCard key={bill.id} bill={bill} />
                ))}
            </div>
        </section>
    );
};

export default Bills;
