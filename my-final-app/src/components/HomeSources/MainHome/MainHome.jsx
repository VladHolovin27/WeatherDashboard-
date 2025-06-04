import ForecastCards from "../ForecastCards/ForecastCards";
import Search from "../SearchInputHome/SearchInputHome";
import styles from './MainHome.module.css'

function MainHome({ onHourForeCast, onSeeMore }) {
  const cards = [
    {
      id: 1,
      city: "Prague",
      country: "Czech Republic",
      time: "14:00",
      date: "13.10.2023",
      day: "Friday",
      degree: "22℃"
    },
    {
      id: 2,
      city: "Kyiv",
      country: "Ukraine",
      time: "15:00",
      date: "13.10.2023",
      day: "Friday",
      degree: "18℃"
    },
    {
      id: 3,
      city: "London",
      country: "UK",
      time: "13:00",
      date: "13.10.2023",
      day: "Friday",
      degree: "16℃"
    }
  ];
  return (
   <main>
     <section className={styles.homeMain}>
      <h1 className={styles.homeMainTitle}>Weather Dashboard</h1>

      <div className={styles.homeMainContent}>
        <div className={styles.homeMainLeft}>
          <p>Create your personal list of</p>
          <p>favorite cities and always be</p>
          <p>aware of the weather.</p>
        </div>

        <div className={styles.verticalLine}></div>

        <div className={styles.homeMainRight}>
          <p>October 2023</p>
          <p>Friday, 13th</p>
        </div>
       </div>

       <Search />
      </section>

     <section className={styles.sunCards}>
       <ForecastCards cards={cards} onHourForeCast={onHourForeCast} onSeeMore={onSeeMore}/>
       {/* <ForecastCards onHourForeCast={onHourForeCast} onSeeMore={onSeeMore}/>
       <ForecastCards onHourForeCast={onHourForeCast} onSeeMore={onSeeMore}/> */}
     </section>

    <section className={styles.interactionCards}>

    </section>
  </main>
);

}

export default MainHome;