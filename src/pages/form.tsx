import { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    birthDate: "",
    occupation: "",
    company: "",
    jobTitle: "",
    experience: "",
    education: "",
    skills: "",
    interests: "",
    newsletter: false,
    contactMethod: "email",
    comments: "",
    lastField: "", // Adding a new field that will appear at the very bottom
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!\n" + JSON.stringify(formData, null, 2));
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sample Form</h1>
        <p className={styles.description}>
          Please fill out all the fields below
        </p>

        <form onSubmit={handleSubmit} className={styles.form} role="form">
          <div className={styles.formGroup}>
            <h2>Personal Information</h2>

            <div className={styles.formField}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="birthDate">Date of Birth:</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="lastName">A problematic input:</label>
              <input
                type="text"
                id="problematic_input"
                name="problematic input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>
              Submit Form
            </button>
            <button type="reset" className={styles.resetButton}>
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
