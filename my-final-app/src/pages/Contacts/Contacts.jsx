import { Link } from 'react-router-dom';
import styles from './Contacts.module.css'
function Contacts() {
    return(
        <Link to={"/home/contacts"} className={styles.leftMenuSecondTitle}>Contacts</Link>
    )
}

export default Contacts;