import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center bg-black p-4 fixed right-0 left-0 top-0 space-x-5">
      <a href='#top' className="text-white duration-500">Home</a>
      <a href='#About me' className="text-white duration-500">About</a> 
      <a href='#experience' className="text-white duration-500">Experience</a>
      <a href='#Projects' className="text-white duration-500">Projects</a>
      <a href='#Contact' className="text-white duration-500">Contact</a>
    </div>
  );
};

export default Header;