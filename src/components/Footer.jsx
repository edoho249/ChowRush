
import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 ChowRush. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
  text: {
    fontSize: "14px",
    margin: 0,
  },
};
