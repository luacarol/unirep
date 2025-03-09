import "./ButtonIcon.css";

const ButtonIcon = ({ type, text, iconClass, onClick }) => {
    return (
        <button type={type} className="button-icon" onClick={onClick}>
            <i class={iconClass}></i>
            <label className="text-commom">{text}</label>
        </button>
    )
}

export default ButtonIcon;