import "./ButtonLine.css";

const ButtonLine = ({ text }) => {
    return (
        <button className="button-line">
            <label className="legend">{text}</label>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    )
}

export default ButtonLine;