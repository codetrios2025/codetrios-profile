import React, { useState, useEffect } from 'react';
import Styles from '../../Style/Common.module.css';

const AutoTextChange = ({ texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(textChangeInterval);
  }, [texts, interval]);

  return (
    <h6><span className='animeText'>{texts[currentIndex]}</span></h6>
  );
};

export default AutoTextChange;
