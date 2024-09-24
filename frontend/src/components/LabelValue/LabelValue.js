import styles from './LabelValue.module.css';

const LabelValue = ({ className, textLabel, textValue }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <label className={`section`}>{textLabel}:</label>
            <label className={`${styles.textValue}`}>{textValue}</label>
        </div>
    )
}

export default LabelValue;
