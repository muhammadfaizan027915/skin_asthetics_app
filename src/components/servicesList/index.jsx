import { servicesList } from "../../utils/constants";
import styles from "./servicesList.module.css";

function ServicesList() {
  return (
    <ul className={styles.servicesListContainer}>
      {servicesList.map((service, index) => (
        <li className={styles.serviceItem} key={index}>
          <p>
            <strong>{service.title}: </strong>
            {service.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ServicesList;
