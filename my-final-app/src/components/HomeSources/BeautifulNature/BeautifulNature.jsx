import { useState } from 'react';
import styles from './BeautifulNature.module.css';

import img1 from '../../../assets/beautifulNatureForSlider1.png';
import img2 from '../../../assets/beautifulNatureForSlider2.png';
import img3 from '../../../assets/beautifulNatureForSlider3.png';
import img4 from '../../../assets/beautifulNatureForSlider4.png';
import img5 from '../../../assets/beautifulNatureForSlider5.png';

function BeautifulNature() {
  const images = [img1, img2, img3, img4, img5];
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.slider}>
      <h1 className={styles.beautifulNatureTitle}>Beautiful Nature</h1>
    <div className={styles.sliderContainer}>
      {images.map((src, index) => {
        const offset = index - activeIndex;

        let className = styles.hidden;
        if (offset === 0) className = styles.active;
        else if (offset === -1) className = styles.left1;
        else if (offset === -2) className = styles.left2;
        else if (offset === 1) className = styles.right1;
        else if (offset === 2) className = styles.right2;

        return (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`${styles.image} ${className}`}
            onClick={() => handleSlide(index)}
          />
        );
      })}
    </div>
    </section>

  );
}

export default BeautifulNature;

