import HeaderHome from '../../components/HomeSources/HeaderHome/HeaderHome';
import styles from './Menu.module.css';

function Menu() {
    return (
        <section className={styles.container}>
            <HeaderHome />
            <div className={styles.menu}>
                <h1 className={styles.title}>Menu</h1>
             <ul className={styles.list}>
                <li className={styles.text}>🌤 View today's weather forecast</li>
                <li className={styles.text}>📅 Explore the 8-day extended forecast</li>
                <li className={styles.text}>📊 Visual charts for temperature, humidity, and pressure</li>
                <li className={styles.text}>🔍 Search weather by city or region</li>
                <li className={styles.text}>❤️ Add favorite locations</li>
                <li className={styles.text}>⚙️ Customize your user profile settings</li>
            </ul>           
            </div>
        </section>
    );
}

export default Menu;