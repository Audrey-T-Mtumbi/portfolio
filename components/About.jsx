import React from "react";

const About = () => {
  return (
    <div id='About me'
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to bottom, white,   rgb(85, 74, 86)",
        padding: "50px 20px",
        minHeight: "100vh",
      }}
    >
      <h1 className="mt-20 mb-4 text-3xl font-bold">About Me</h1>
      <p className="font-semibold" style={{ fontSize: "1.5rem", maxWidth: "800px" }}>
        Hello! I’m Audrey Tatenda Mtumbi. I have a passion for Software Engineering.
      </p>
      <img 
        src="/mia.jpg" 
        alt="Audrey Tatenda Mtumbi" 
        style={{ width: "400px", height: "auto", borderRadius: "10px", margin: "20px 0" }}
      />
      
      <h2 className="shadow-shadowWhite mt-10 text-2xl mb-3 font-semibold">Skills & Expertise</h2>
      <ul style={{ textAlign: "left", maxWidth: "800px", fontSize: "1.2rem" }}>
        <li>
          I am a dedicated lifelong learner with a passion for technology and problem-solving. My educational journey has equipped me with the knowledge and skills necessary to pursue my aspirations of becoming a software engineer. Through both formal education and self-study, I have developed a solid foundation in programming, mathematics, and analytical thinking.
        </li>
        <li>
          <h3 className="mt-3 mb-3 text-2xl text-center font-bold">Core Skills and Expertise</h3>
          
          <strong>Programming Languages:</strong> Proficient in Python, Java, and C++.<br />
          Skilled at analyzing complex problems and devising efficient solutions.<br />
          Experienced in guiding groups to achieve shared goals and balancing multiple responsibilities effectively.
        </li>
        <li className=" mt-3">
          As a former class monitress, I honed my leadership skills by effectively guiding and organizing my peers. This experience taught me the value of clear communication, responsibility, and leading by example.
        </li>
        <li className="mt-3">
          <strong>Hobbies:</strong> When I am not immersed in coding or exploring the tech world, I enjoy reading self-help books that inspire growth and productivity.
        </li>
      </ul>
      <div style={{ height: "50px" }}></div>
    </div>
  );
};

export default About;
