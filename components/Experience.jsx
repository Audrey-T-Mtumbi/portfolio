import React from 'react';

const Experience = () => {
  return (
    <div className='h-[23rem]'  id='experience' style={{ textAlign: "center", background: "linear-gradient(to bottom,  rgb(85, 74, 86), white)",  }}>
      <h1 className='mt-7 boldtext-6xl font-bold' style={{ fontWeight: "bold", textDecoration: "underline", borderBottom: "3px solid grey", boxShadow: "0px 4px 2px -2px grey", display: "inline-block", paddingBottom: "5px" }}>
        Experience
      </h1>
      
      <div style={{ marginTop: "30px" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ fontSize: "1.2rem", textDecoration: "underline" }}>HTML</li>
          <li style={{ fontSize: "1.2rem", textDecoration: "underline" }}>JavaScript</li>
          <li style={{ fontSize: "1.2rem", textDecoration: "underline" }}>CSS</li>
          <li style={{ fontSize: "1.2rem", textDecoration: "underline" }}>React</li>
          <li style={{ fontSize: "1.2rem", textDecoration: "underline" }}>Bootstrap frameworks</li>
        </ul>
      </div>
      
      <div style={{ marginTop: "40px" }}>
        <a
          href="AudreyResume.pdf" 
         download
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", background: "#4a4a8c", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
