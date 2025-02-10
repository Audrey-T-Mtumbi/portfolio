const Contact = () => {
  return (
    <div id='Contact'
      style={{
        background: "linear-gradient(to bottom,  rgb(85, 74, 86), white)",
        padding: "40px",
        textAlign: "center",
        width: "100vw", // Covers the entire width
        minHeight: "300px", // Adjust height as needed
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)", // Slight transparency for contrast
          padding: "20px",
          borderRadius: "10px",
          display: "inline-block",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            color: "black",
            textDecoration: "underline",
            marginBottom: "20px",
          }}
        >
          Contact
        </h2>

        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          <li style={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: "bold" }}>LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/audrey-mtumbi-b9795a257/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b5", textDecoration: "none" }}
            >
              LinkedIn Profile
            </a>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: "bold" }}>X: </span>
            <a
              href="https://x.com/AudreyMtumbi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1DA1F2", textDecoration: "none" }}
            >
              Twitter/X Profile
            </a>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: "bold" }}>Facebook: </span>
            <a
              href="https://www.facebook.com/audrey.ynes"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1877F2", textDecoration: "none" }}
            >
              Facebook Profile
            </a>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: "bold" }}>Instagram: </span>
            <a
              href="https://www.instagram.com/ynes_xo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1DA1F2", textDecoration: "none" }} // Changed to blue
            >
              Instagram Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

      
    
