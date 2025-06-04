import HeaderHome from '../../components/HomeSources/HeaderHome/HeaderHome';
import styles from './WhoWeAre.module.css';

function WhoWeAre() {
    return (
        <section className={styles.container}>
            <HeaderHome />
            <div className={styles.whoWeAre}>
                <h1 className={styles.title}>Who We Are</h1>
                <p className={styles.text}>
                Welcome to Weather Dashboard — a passionate team of developers, designers, and data-lovers
                focused on delivering accurate and beautiful weather insights.
                </p>
                <p className={styles.text}>
                We believe weather apps should be not only functional, but visually inspiring.
                Thanks for using our service!
                </p>            
            </div>
        </section>
    );
}

export default WhoWeAre;
