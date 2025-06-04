import { Link } from 'react-router-dom';
import styles from './WhoWeAre.module.css'
function WhoWeAre() {
    return(
        <div>
            <Link to={"/home/whoWeAre"} className={styles.leftMenuFirstTitle}>Who we are</Link>
        </div>
    )
}

export default WhoWeAre;