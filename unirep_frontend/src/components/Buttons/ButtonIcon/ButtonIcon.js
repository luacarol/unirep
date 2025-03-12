import "./ButtonIcon.css";

const ButtonIcon = ({ type, text, iconClass, onClick, onlyIcon }) => {
    let content;

    if (onlyIcon === true) {
        content = (
            <button type={type} className="only-icon" onClick={onClick}>
                <i class={iconClass}></i>
            </button>
        )
    }
    else {
        content = (
            <button type={type} className="button-icon" onClick={onClick}>
                <i class={iconClass}></i>
                <label className="text-commom">{text}</label>
            </button>
        )
    }

    return (
        content
    )
}

export default ButtonIcon;