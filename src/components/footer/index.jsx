import { Mail, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItem}>
        <Mail />
        <a
          className={styles.footerLink}
          href="mailto:contact@serineskinesthetics.com"
        >
          contact@serineskinesthetics.com
        </a>
      </div>
      <div className={styles.footerItem}>
        <MapPin />
        <p>House 1, Street3, Lane 10, Hostel City park Road Islamabad</p>
      </div>

      <div className={styles.footerItem}>
        <Phone />
        <a className={styles.footerLink} href="tel:+923143626338">
          +923143626338
        </a>
      </div>

      <div className={styles.footerItem}>
        <Facebook />
        <a className={styles.footerLink} href="#">
          Facebook
        </a>
      </div>
      <div className={styles.footerItem}>
        <Instagram />
        <a className={styles.footerLink} href="#">
          Instagram
        </a>
      </div>
    </div>
  );
}
export default Footer;
