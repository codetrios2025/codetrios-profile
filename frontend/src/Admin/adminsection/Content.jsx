import React from 'react';
import styles from './Content.module.css';

const Content = ({ data }) => {
  return (
    <div className={styles.content}>
      <h1>Content Section</h1>
      <p>{data}</p>
    </div>
  );
};

export default Content;
