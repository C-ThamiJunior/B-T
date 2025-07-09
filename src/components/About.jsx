import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        The future success of this country will depend on the skills imparted to the younger generations ready to take on the challenges that lie ahead. That’s why we at <strong>B & T Skills Development Trainings</strong> are committed to providing a first-class practical education and skills for the country’s young people to prepare them for the world of work in different fields.
      </p>
      <p style={styles.paragraph}>
        <strong>B & T Skills Development Trainings</strong> offers the opportunity to study courses which are available and learnerships.
      </p>
      <p style={styles.paragraph}>
        This is a very exciting time for young people considering training and education at <strong>B & T Skills Development Trainings</strong> and we’re proud to be playing a key role, alongside employers, in this industry-focused learning.
      </p>
      <p style={styles.paragraph}>
        Accredited SAQA-Aligned industry-focused learning gives young people the chance to learn and succeed within an inspirational institution, supported by expert and technically trained staff, utilising the readily available expertise that is on offer.
      </p>
      <p style={styles.paragraph}>
        The curriculum is driven by the development of employability skills alongside the need to meet employer’s ever-changing demand.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "900px",
    margin: "auto",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  paragraph: {
    marginBottom: "1rem",
    fontSize: "1rem",
  },
};

export default About;
