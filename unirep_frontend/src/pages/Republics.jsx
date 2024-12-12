import axios from "axios";
import RepublicCard from "../components/Cards/RepublicCard/RepublicCard";

const Republics = () => {
    axios.get("http://127.0.0.1:8000/republics/")
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

    return (
        <div>
            <h1 className="title">Repúblicas</h1>

            <div className="cards_section">
                <RepublicCard/>
            </div>
        </div>
    )
}

export default Republics;