import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={"src/assets/logos/sereneAsthetics.png"} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/book">Book An Appointment</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/services">Services</a>
            <ul className={styles.dropdown}>
              <li>
                <a href="/service1">Service 1</a>
              </li>
              <li>
                <a href="/service2">Service 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/academy">Serene Academy</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
