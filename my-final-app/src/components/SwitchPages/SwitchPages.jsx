import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from './SwitchPages.module.css';

function SwitchPages() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdownWrapper}>
            <button className={styles.dropdownToggle} onClick={toggleMenu}>
                Select the page ▾
            </button>
            {isOpen && (
                <ul className={styles.select}>
                    <li>
                        <Link
                            className={
                                location.pathname === "/" 
                                    ? styles.active 
                                    : styles.selectOption
                            }
                            to="/"
                            onClick={() => setIsOpen(false)}
                        >
                            Authorization
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                location.pathname === "/home" 
                                    ? styles.active 
                                    : styles.selectOption
                            }
                            to="/home"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                location.pathname === "/forecast" 
                                    ? styles.active 
                                    : styles.selectOption
                            }
                            to="/forecast"
                            onClick={() => setIsOpen(false)}
                        >
                            Forecast
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default SwitchPages;

