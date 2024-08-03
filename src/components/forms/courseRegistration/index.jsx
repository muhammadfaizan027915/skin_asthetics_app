import styles from "./courseRegistration.module.css";

function CourseRegistrationForm() {
  return (
    <form className={styles.courseRegistrationFormContianer}>
      <div>
        <label>Name*</label>
        <div className={styles.fieldContainer}>
          <input type="text" placeholder="First" className={"field"} />
          <input type="text" placeholder="Last" className={"field"} />
        </div>
      </div>
      <div>
        <label>Email*</label>
        <div>
          <input type="email" className={"field"} />
        </div>
      </div>
      <div>
        <label>Our CPD Courses*</label>
        <div>
          <select>
            <option>Level 7 Diploma in Beauty Therapy - QLS Endorsed</option>
            <option>
              Beauty Therapy and Make-Up (Online) - CPD Accredited
            </option>
            <option>
              Level 3 Diploma in Beauty Therapy - CPD Certified Training
            </option>
          </select>
        </div>
      </div>
      <div>
        <label>Where did you hear about Us*</label>
        <div className={styles.optionsContainer}>
          <label>
            <input type="radio" name="source" value="Facebook" />
            &nbsp; Facebook
          </label>
          <label>
            <input type="radio" name="source" value="Instagram" />
            &nbsp; Instagram
          </label>
          <label>
            <input type="radio" name="source" value="Indeed" />
            &nbsp; Indeed
          </label>
          <label>
            <input type="radio" name="source" value="Others" />
            &nbsp; Others
          </label>
        </div>
      </div>
      <div>
        <label>Message *</label>
        <div>
          <textarea rows="4"></textarea>
        </div>
      </div>
      <button type="submit" className={"button btnSecondary"}>
        Submit Application
      </button>
    </form>
  );
}

export default CourseRegistrationForm;
