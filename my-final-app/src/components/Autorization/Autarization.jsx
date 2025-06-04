import { useState } from "react";
import styles from './Autarization.module.css';
import { useNavigate } from "react-router-dom";

function Autorization() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (userName.length > 0 && email.includes("@") && password.length > 5 && !password.includes("@")) {
            localStorage.setItem("authorization", JSON.stringify({ userName }));
            navigate("/home");
        } else {
            alert("Please fill data correctly.");
        }
    };

    return (
        <section className={styles.section}>
            <header>
                <h1 className={styles.signUpTitle}>Sign Up</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className={styles.authInputs}>
                    <div className={styles.userNameInputDiv}>
                        <span className={styles.userNameInputTitle}>Username</span>
                        <input
                        className={styles.userNameInput}
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    </div>
                    <div className={styles.emailInputDiv}>
                        <span className={styles.emailInputTitle}>E-Mail</span>
                        <input
                        className={styles.emailInput}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className={styles.passwordInputDiv}>
                        <span className={styles.passwordInputTitle}>Password</span>
                        <input
                        className={styles.passwordInput}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    </div>
                    <button type="submit" className={styles.sighnUpBtn}>Sign Up</button>
                </form>
            </main>
        </section>
    );
}

export default Autorization;
