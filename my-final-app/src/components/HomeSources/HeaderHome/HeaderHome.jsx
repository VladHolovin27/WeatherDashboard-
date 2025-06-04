import { useEffect, useState } from 'react';
import styles from './HeaderHome.module.css';
// import WhoWeAre from '../../../pages/WhoWeAre/WhoWeAre';
// import Contacts from '../../../pages/Contacts/Contacts';
// import Menu from '../../../pages/Menu/Menu';
import homeLogo from '../../../assets/HomeLogo.png';
import userLogo from '../../../assets/UserLogo.png';
import SwitchPages from '../../SwitchPages/SwitchPages';
import { Link, useNavigate } from 'react-router-dom';

function HeaderHome() {
    const [userName, setUserName] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem("authorization"));
        if (getUser && getUser.userName) {
            setUserName(getUser.userName);
        }
    }, []);

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.leftMenu}>
                    <img className={styles.homeLogo} src={homeLogo} alt="Home logo" />
                    <div className={styles.leftMenuTitles}>
                        <Link to={"/home/whoWeAre"} className={styles.leftMenuTitle}>Who we are</Link>
                       <Link to={"/home/contacts"} className={styles.leftMenuTitle}>Contacts</Link>
                        <Link to={"/home/menu"} className={styles.leftMenuTitle}>Menu</Link>
                    </div>
                </div>

                <div className={styles.rightMenu}>
                    <div className={styles.desktopMenu}>
                        <p className={styles.getUserName}>{userName}</p>
                        <img className={styles.userLogo} src={userLogo} alt="User avatar" />
                        <SwitchPages />
                        <button className={styles.logOutBtn} onClick={() => navigate("/")}>Log Out</button>
                    </div>

                    <div className={styles.burgerIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </div>

                    {isMenuOpen && (
                    <div className={`${styles.burgerMenu} ${styles.open}`}>
                        <p className={styles.getUserName}>{userName}</p>
                        <img className={styles.userLogo} src={userLogo} alt="User avatar" />
                        <SwitchPages />
                        <button className={styles.logOutBtn} onClick={() => navigate("/")}>Log Out</button>
                    </div>
            )}
                </div>
            </div>
        </header>
    );
}

export default HeaderHome;

