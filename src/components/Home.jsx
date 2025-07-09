import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

import bg1 from "../assets/1.avif";
import bg2 from "../assets/3.jpg";
import bg3 from "../assets/4.avif";


const Home = () => {
  const backgrounds = [bg1, bg2, bg3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${backgrounds[current]})`,
      }}
    >
      <div style={styles.overlay}>
        <div style={styles.left}>
        </div>
        <div style={styles.right}>
          <h1 style={styles.heading}>Welcome to the  B & T Skills Development Training!</h1>
          <p style={styles.paragraph}>This is your new React app running with Vite.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.4)", // lighter overlay
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "2rem",
  boxSizing: "border-box",
},

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  right: {
    flex: 2,
    color: "#000",
  },
  logo: {
    maxWidth: "300px",
    width: "100%",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.2rem",
  },
};

export default Home;
