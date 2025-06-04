import { useDispatch, useSelector } from 'react-redux'
import styles from './EightDayForeCastSection.module.css'
import { useEffect } from 'react'
import { fetchEightDayWeather } from '../../redux/operators'
import { getEightDayForecast, getIsLoading } from '../../redux/selectors'

export const EightDayForeCastSection = () => {
    const eightCast = useSelector(getEightDayForecast)
    const isLoading = useSelector(getIsLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEightDayWeather())
    }, [dispatch])

    return (
        <div className={styles.eightDayForeCastSection}>
            <div className={styles.eightDayForeCastSectionWrapper}>
                <div className={styles.eightDayForeCastSectionContent}>
                    <h1 className={styles.eightDayForeCastSectionTitle}>5-day forecast</h1>
                    <div className={styles.eightDayForeCastSectionContainer}>
                        {isLoading && <p>Loading...</p>}
                        {!isLoading && eightCast.length === 0 && <p>Not found!</p>}
                        {eightCast && eightCast.map((card, index) => (
                            <div key={index} className={styles.eightDayForeCastSectionCards}>
                                <div className={styles.eightDayForeCastSectionCardInfo}>
                                    <h2 className={styles.eightDayForeCastSectionCardInfoData}>{card.dt}</h2>
                                    <div className={styles.eightDayForeCastSectionInfoContainer}>
                                        <img
                                            src={`https://openweathermap.org/img/wn/${card.icon}.png`}
                                            alt=""
                                            className={styles.eightDayForeCastSectionCardImage}
                                        />
                                        <p className={styles.eightDayForeCastSectionCardText}>
                                            {Math.round(card.temp)}℃
                                        </p>
                                    </div>
                                    <p className={styles.eightDayForeCastSectionCardText}>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
