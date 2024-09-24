import style from './InputCheckBox.module.css';

const InputCheckBox = ({ id, className, label, isChecked, onCheck }) => {
    return (
        <div className={`${className} ${style.container}`}>
            <div className={style.checkboxContainer}>
                <input
                    id={id}
                    className={style.input}
                    type='checkbox'
                    checked={isChecked} // Checkbox controlado por prop
                    onChange={onCheck} // Chama o evento para checar/deschecar
                />
                <label htmlFor={id} className={style.label}>{label}</label>
            </div>
        </div>
    );
};

export default InputCheckBox;
