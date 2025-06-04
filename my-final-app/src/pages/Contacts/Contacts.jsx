import HeaderHome from '../../components/HomeSources/HeaderHome/HeaderHome';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <section className={styles.container}>
            <HeaderHome />
            <div className={styles.contacts}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.text}>
                    We'd love to hear from you! Whether you have questions, feedback, or need support — feel free to reach out.
                </p>

      <ul className={styles.contactsUl}>
        <li className={styles.text}>📧 Email: vladislavg899@gmail.com</li>
        <li className={styles.text}>📱 Telegram: @Vladuhax</li>
        <li className={styles.text}>📱 Phone number: +380953215243</li>
      </ul>           
            </div>
        </section>
    );
}

export default Contacts;