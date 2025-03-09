import React, {  } from "react";
import "./Bills.css";
import BillCard from "../../../components/BillCard/BillCard";

const Bills = () => {
    return (
        <section className="bills-section">
            <h3 className="bigger-subtitle">Itens à Pagar</h3>

            <div className="bill-grid">
                <BillCard/>
                <BillCard/>
                <BillCard/>
            </div>
        </section>
    );
};

export default Bills;
