// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Feel free to reach out!
      </p>
      <ul>
        <li><strong>Email:</strong> info@btskills.co.za</li>
        <li><strong>Phone:</strong> +27 123 456 7890</li>
        <li><strong>Address:</strong> 299 Burger Street, Pretoria North</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.6",
  }
};

export default Contact;
