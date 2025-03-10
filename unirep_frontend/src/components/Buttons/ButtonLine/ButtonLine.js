import "./ButtonLine.css";

const ButtonLine = ({ text, onClick }) => {
    return (
        <button className="button-line" onClick={onClick}>
            <label className="legend">{text}</label>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    )
}

export default ButtonLine;