import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={"/assets/logos/sereneAsthetics.png"} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book An Appointment</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <span>Services</span>
            <ul className={styles.dropdown}>
              <li>
                <Link to={"/services/sermi-permanent-makeup"}>
                  Semi-Permanent Makeup
                </Link>
              </li>
              <li>
                <Link to="/services/laser-hair-removal">
                  Laser Hair Removal
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/academy">Serene Academy</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
