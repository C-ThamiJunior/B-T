import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.ul}>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
        <li><Link to="/courses" style={styles.link}>Courses</Link></li>
        <li><Link to="/apply" style={{ ...styles.link, ...styles.apply }}>Apply</Link></li>
       
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  left: {
    display: "flex",
    alignItems: "center",
    flex: "1 1 auto",
  },
  logo: {
    height: "40px",
    maxWidth: "100%",
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    flex: "2 1 auto",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
  },
  apply: {
    backgroundColor: "red",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: "5px",
  },
};

export default Navbar;
