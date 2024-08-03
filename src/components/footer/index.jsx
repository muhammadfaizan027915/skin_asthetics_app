import { Mail, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItem}>
        <Mail color="#ffd700" />
        <a
          className={styles.footerLink}
          href="mailto:contact@serineskinesthetics.com"
        >
          contact@serineskinesthetics.com
        </a>
      </div>
      <div className={styles.footerItem}>
        <MapPin color="#ffd700" />
        <p>House 1, Street3, Lane 10, Hostel City park Road Islamabad</p>
      </div>

      <div className={styles.footerItem}>
        <Phone color="#ffd700" />
        <a className={styles.footerLink} href="tel:+923143626338">
          +923143626338
        </a>
      </div>

      <div className={styles.footerItem}>
        <Facebook color="#ffd700" />
        <a className={styles.footerLink} href="#">
          Facebook
        </a>
      </div>
      <div className={styles.footerItem}>
        <Instagram color="#ffd700" />
        <a className={styles.footerLink} href="#">
          Instagram
        </a>
      </div>
    </div>
  );
}
export default Footer;
