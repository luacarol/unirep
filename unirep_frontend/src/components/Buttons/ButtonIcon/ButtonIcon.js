import "./ButtonIcon.css";

const ButtonIcon = ({ type, text, iconClass }) => {
    return (
        <button type={type} className="button-icon">
            <i class={iconClass}></i>
            <label className="text-commom">{text}</label>
        </button>
    )
}

export default ButtonIcon;