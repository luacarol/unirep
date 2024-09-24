import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Breadcrumb.module.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Breadcrumb = ({ items, activeItem }) => {
    return (
        <nav className={styles.container}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <a
                        className={`${styles.link} ${item.text === activeItem ? styles.active : ''}`}
                        href={item.href}
                    >
                        {item.text}
                    </a>
                    {index < items.length - 1 && <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />}
                </React.Fragment>
            ))}
        </nav>
    )
}

export default Breadcrumb;
