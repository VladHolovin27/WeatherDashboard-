import { useDispatch, useSelector } from 'react-redux'
import styles from './ForecastCharacteristics.module.css'
import { getWeatherInfo } from '../../redux/selectors'
import { useEffect } from 'react';
import { weatherCharacteristics } from '../../redux/operators';
import feelsLikeImg from '../../assets/feelsLikeImg.png'
import humidityImg from '../../assets/humidityImg.png'
import pressureImg from '../../assets/pressureImg.png'
import windImg from '../../assets/windImg.png'
import visibilityImg from '../../assets/visibilityImg.png'

function ForecastCharacteristics () {
    const weatherInfo = useSelector(getWeatherInfo);
    // const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weatherCharacteristics())
    }, [dispatch])

    return(
        <section className={styles.forecastInfoSection}>
            <div className={styles.forecastInfoWrapper}>
                <div className={styles.forecastInfoCardsWrapper}>
                        {weatherInfo && weatherInfo.map((card, index) => (
                            <div className={styles.forecastInfoCards}>
                                <div key={index} className={styles.forecastInfoCard}>
                                    <h1 className={styles.forecastInfoTitle}>Feels like</h1>
                                    <p className={styles.forecastInfoText}>{card.feelsLike}°C</p>
                                    <img className={styles.forecastCharacImg} src={feelsLikeImg} alt=''/>
                                </div>
                                <div key={card} className={styles.forecastInfoCard}>
                                    {/* <h1 className={styles.forecastInfoTitle}>Temperature</h1> */}
                                    <div className={styles.temperatureBox}>
                                        <div className={styles.maxTemperatureBox}>
                                            <h2 className={styles.forecastInfoTitle}>Min temperature</h2>
                                            <p className={styles.forecastInfoText}>{card.minTemp}°C</p>
                                        </div>
                                        <div className={styles.minTemperatureBox}>
                                            <h2 className={styles.forecastInfoTitle}>Max temperature</h2>
                                            <p className={styles.forecastInfoText}>{card.maxTemp}°C</p>
                                        </div>
                                    </div>
                                </div>
                                <div key={card} className={styles.forecastInfoCard}>
                                    <h1 className={styles.forecastInfoTitle}>Humidity</h1>
                                    <p className={styles.forecastInfoText}>{card.humidity}%</p>
                                    <img className={styles.forecastCharacImg} src={humidityImg} alt=''/>
                                </div>
                                <div key={card} className={styles.forecastInfoCard}>
                                    <h1 className={styles.forecastInfoTitle}>Pressure</h1>
                                    <p className={styles.forecastInfoText}>{card.pressure} Pa</p>
                                    <img className={styles.forecastCharacImg} src={pressureImg} alt=''/>
                                </div>
                                <div key={card} className={styles.forecastInfoCard}>
                                    <h1 className={styles.forecastInfoTitle}>Wind speed</h1>
                                    <p className={styles.forecastInfoText}>{card.windSpeed}m/s</p>
                                    <img className={styles.forecastCharacImg} src={windImg} alt=''/>
                                </div>
                                <div key={card} className={styles.forecastInfoCard}>
                                    <h1 className={styles.forecastInfoTitle}>Visibility</h1>
                                    <p className={styles.forecastInfoText}>{card.visibility}</p>
                                    <img className={styles.forecastCharacImg} src={visibilityImg} alt=''/>
                                </div>
                            </div>
                        ))}
                    {/* {isLoading ? <p>Loading...</p> : <p>Nothing has found</p>} */}
                </div>
            </div>
        </section>
    )
}

export default ForecastCharacteristics