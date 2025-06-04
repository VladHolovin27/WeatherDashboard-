import { Link } from 'react-router-dom';
import styles from './Menu.module.css'
function Menu() {
    return(
        <Link to={"/home/menu"} className={styles.leftMenuThirdTitle}>Menu</Link>
    )
}

export default Menu;