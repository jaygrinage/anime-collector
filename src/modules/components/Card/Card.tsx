import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, image, text, handleAddClick }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="Thumbnail" className={styles.image} />
      <div className={styles.middle}>
        <button className={styles.button} onClick={() => handleAddClick(title)}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Card;