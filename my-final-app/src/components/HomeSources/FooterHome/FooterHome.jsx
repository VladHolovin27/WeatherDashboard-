import styles from './Footer.module.css';
import footerIcon from '../../../assets/HomeLogo.png';
import instagramIcon from '../../../assets/instagramIcon.png';
import facebookIcon from '../../../assets/facebookIcon.png';
import whatsappIcon from '../../../assets/whatsappIcon.png';

function FooterHome() {
  return (
    <section className={styles.footerHome}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerBlocks}>

          <div className={styles.leftBlock}>
            <img
              className={styles.leftBlockLogo}
              src={footerIcon}
              alt="footerIcon"
            />
          </div>

          <div className={styles.centralBlock}>
            <h1 className={styles.centralBlockTitle}>Address</h1>
            <p className={styles.centralBlockText}>Svobody Str. 35</p>
            <p className={styles.centralBlockText}>Kyiv</p>
            <p className={styles.centralBlockText}>Ukraine</p>
          </div>

          <div className={styles.rightBlock}>
            <h1 className={styles.rightBlockTitle}>Contact Us</h1>
            <div className={styles.rightBlockIcons}>
              <a
                href="https://www.instagram.com/?locale=ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rightBlockIcon}
              >
                <img
                  className={styles.rightBlockLogo}
                  src={instagramIcon}
                  alt="instagramIcon"
                />
              </a>
              <a
                href="https://www.facebook.com/?locale=ru_RU"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rightBlockIcon}
              >
                <img
                  className={styles.rightBlockLogo}
                  src={facebookIcon}
                  alt="facebookIcon"
                />
              </a>
              <a
                href="https://www.whatsapp.com/?lang=ru_RU"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rightBlockIcon}
              >
                <img
                  className={styles.rightBlockLogo}
                  src={whatsappIcon}
                  alt="whatsappIcon"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FooterHome;
