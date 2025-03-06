import "./ButtonIcon.css";

const ButtonIcon = ({ type, text }) => {
    return (
        <button type={type} className="button-icon">
            <i class="fa-solid fa-floppy-disk"></i>
            <label className="text-commom">{text}</label>
        </button>
    )
}

export default ButtonIcon;