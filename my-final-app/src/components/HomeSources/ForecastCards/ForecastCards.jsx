import sunIcon from '../../../assets/sunIcon.png';
import changeIcon from '../../../assets/changeIcon.png';
import heartIcon from '../../../assets/heartIcon.png';
import deleteIcon from '../../../assets/deleteIcon.png';
import styles from './ForecastCards.module.css';
import { useDispatch } from 'react-redux';
import { addLike, deleteCard, resetCards } from '../../../redux/slice'; 

function ForecastCards({ cards, onHourForeCast, onSeeMore }) {
  const dispatch = useDispatch();

  const handleLike = (id) => dispatch(addLike(id));
  const handleDelete = (id) => dispatch(deleteCard(id));
  const handleReset = () => dispatch(resetCards());

  return (
    <section className={styles.sunCardSection}>
      <div className={styles.sunCardWrapper}>
        <div className={styles.sunCards}>
          {cards.map((card) => (
            <div className={styles.sunCard} key={card.id}>
              <div className={styles.sunCardTitles}>
                <h3 className={styles.sunCardTitle}>{card.city}</h3>
                <h3 className={styles.sunCardTitle}>{card.country}</h3>
              </div>
              <h1 className={styles.sunCardTime}>{card.time}</h1>
              <button className={styles.sunCardBtn} onClick={onHourForeCast}>Hourly forecast</button>
              <div className={styles.sunCardInfo}>
                <p className={styles.sunCardData}>{card.date}</p>
                <div className={styles.sunCardLine}></div>
                <p className={styles.sunCardDay}>{card.day}</p>
              </div>
              <img src={sunIcon} alt="weather" className={styles.sunCardPhoto} />
              <h2 className={styles.sunCardDegree}>{card.degree}</h2>
              <div className={styles.sunCardIcons}>
                <button onClick={handleReset} className={styles.sunCardBtnToIcon}>
                  <img src={changeIcon} alt="reset" className={styles.sunCardUpdateIcon} />
                </button>
                <button onClick={() => handleLike(card.id)} className={styles.sunCardBtnToIcon}>
                  <img src={heartIcon} alt="like" className={styles.sunCardHeartIcon} />
                </button>
                <button onClick={onSeeMore} className={styles.sunCardSeeMore}>See more</button>
                <button onClick={() => handleDelete(card.id)} className={styles.sunCardBtnToIcon}>
                  <img src={deleteIcon} alt="delete" className={styles.sunCardDeleteIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForecastCards;
