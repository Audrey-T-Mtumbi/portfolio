import React from 'react';

const Projects = () => {
  return (
    <div id='Projects' style={{ padding: "10px", textAlign: "center",background: "linear-gradient(to top,  rgb(85, 74, 86), white)", minHeight: "100vh" }}>
      <h1 className='h-5 boldtext text-xl ' style={{ fontWeight: "bold", textDecoration: "underline", borderBottom: "0.5px solid grey", boxShadow: "0px 4px 2px -2px grey", display: "inline-block", paddingBottom: "5px" }}>
        Projects
      </h1>
      
      <div style={{ marginTop: "30px" }}>
        <h2 className='mt-9 text text-xl' style={{ fontWeight: "bold"   }}>SHASHA Bridge Program Alumni</h2>
        <p className='text-left px-36'>Gained in-depth knowledge of cross-sector collaboration, community development, and sustainable practices. Successfully completed the program’s curriculum focused on leadership, project management, and fostering partnerships to create lasting societal impact.</p>
        <p className='text-left px-36'>Worked on a cross-cultural project aimed at addressing disparities in education or economic opportunities. Collaborated with a global team to devise actionable strategies and presented solutions to community leaders.</p>
        <h3 className='mt-8 font-semibold text-xl'>Achievements</h3>
        <p className='text-left px-36'>Honored as a SHASHA Bridge Program Alumni, demonstrating exceptional leadership and innovation in cross-sector community projects.</p>
        <p className='mt-2 text-left px-36'>Successfully secured funding or mentorship opportunities for impactful projects addressing pressing environmental or social issues.</p>
        <p className='mt-2 text-left px-36'>Organized and facilitated workshops that trained community members on sustainability practices and eco-friendly business approaches.</p>
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <h2 className='mt-5 mb-5'style={{ fontWeight: "bold" }}>RISE GLOBAL FINALIST</h2>
        <p className='text-left px-36'>As a RISE Finalist, demonstrated exceptional problem-solving skills, leadership abilities, and a commitment to creating innovative solutions for global challenges. Participated in a highly competitive program that identifies and empowers young changemakers, equipping them with resources and mentorship to scale their impact.</p>
        <h3 className='mt-8 font-semibold text-xl mb-4' >Achievements</h3>
        <p className='text-left px-36'>Recognized as a RISE Finalist, joining a global network of changemakers dedicated to solving critical challenges worldwide.</p>
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <h2 className='mt-8 text-xl'style={{ fontWeight: "bold" }}>YOTA ENTERPRISE FINALIST</h2>
        <h3>Projects</h3>
        <p className='text-left px-36'><strong >Green Business Enterprise Finalist Project:</strong> Led a project focused on creating an eco-friendly business solution addressing climate change or sustainable resource management. Designed a business model emphasizing environmental sustainability while ensuring economic viability. Presented the project to a panel of experts and gained recognition as a finalist.</p>
        <p className='mt-8 text-left px-36'><strong>Community Sustainability Initiative:</strong> Developed and implemented community-focused projects to promote environmental awareness.</p>
        <h3 className='mt-8 font-semibold text-xl mb-5'>Achievements</h3>
        <p className='text-left px-36'>Awarded Green Business Enterprise Finalist for spearheading a project focused on sustainable development and eco-friendly business solutions.</p>
      </div>
    </div>
  );
};

export default Projects;
