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

  // Add effect to disable viewport meta tag behavior on mobile
  useEffect(() => {
    // This prevents the viewport from automatically adjusting when the keyboard opens
    // This won't affect emulators but will cause issues on real devices
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.head.appendChild(meta);

    // Add visual viewport event listener to counter the keyboard
    // This is only implemented on real devices and will have no effect on emulators
    const handleVisualViewportChange = () => {
      // When the visual viewport changes (keyboard appears), don't adjust the layout
      if (window.visualViewport) {
        document.body.style.height = window.visualViewport.height + "px";
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener(
        "resize",
        handleVisualViewportChange
      );
      window.visualViewport.addEventListener(
        "scroll",
        handleVisualViewportChange
      );
    }

    // Create a global event handler to prevent mobile browsers from automatically scrolling inputs into view
    const preventInputScroll = () => {
      const activeElement = document.activeElement;
      if (
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA")
      ) {
        // This forces focus but prevents scrolling
        setTimeout(() => {
          window.scrollTo(window.scrollX, window.scrollY);
        }, 50);
      }
    };

    // Add event listener to prevent default scroll behavior
    document.addEventListener("focus", preventInputScroll, true);

    return () => {
      document.head.removeChild(meta);
      document.removeEventListener("focus", preventInputScroll, true);

      // Clean up visual viewport listeners
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          handleVisualViewportChange
        );
        window.visualViewport.removeEventListener(
          "scroll",
          handleVisualViewportChange
        );
      }
    };
  }, []);

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

  // Add focus handler to prevent scrolling into view
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    // Prevent the default behavior which might scroll the element into view
    e.preventDefault();

    // Get current scroll position
    const scrollY = window.scrollY;

    // Force scroll back to where it was to prevent keyboard adjustments
    // Use multiple timeouts to ensure it counters any browser adjustments
    setTimeout(() => {
      window.scrollTo(0, scrollY);

      // Add a second timeout to counter delayed keyboard appearance
      setTimeout(() => {
        window.scrollTo(0, scrollY);

        // And a third one for good measure
        setTimeout(() => {
          window.scrollTo(0, scrollY);
        }, 300);
      }, 100);
    }, 50);

    console.log("Input focused, preventing scroll:", e.target.id);
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
          </div>

          <div className={styles.formGroup}>
            <h2>Address Information</h2>

            <div className={styles.formField}>
              <label htmlFor="address">Street Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="state">State/Province:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="zipCode">Postal/ZIP Code:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <h2>Professional Information</h2>

            <div className={styles.formField}>
              <label htmlFor="occupation">Occupation:</label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="company">Company/Organization:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="experience">Years of Experience:</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className={styles.formField}>
              <label htmlFor="education">Highest Education Level:</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="highSchool">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD/Doctorate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formField}>
              <label htmlFor="skills">Skills (comma separated):</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. JavaScript, React, CSS"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <h2>Additional Information</h2>

            <div className={styles.formField}>
              <label htmlFor="interests">Interests/Hobbies:</label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="contactMethod">Preferred Contact Method:</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === "email"}
                    onChange={handleChange}
                  />
                  Email
                </label>
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === "phone"}
                    onChange={handleChange}
                  />
                  Phone
                </label>
              </div>
            </div>

            <div className={styles.formField}>
              <label>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                Subscribe to newsletter
              </label>
            </div>

            <div className={styles.formField}>
              <label htmlFor="comments">Additional Comments:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                onFocus={handleFocus}
                rows={5}
              />
            </div>

            {/* Add a last field at the bottom that will be hidden by keyboard on mobile */}
            <div
              className={styles.formField}
              style={{ marginBottom: 0, paddingBottom: "50px" }}
            >
              <label htmlFor="lastField">Confirmation Code:</label>
              <input
                type="text"
                id="lastField"
                name="lastField"
                value={formData.lastField}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Enter confirmation code if you have one"
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
