"use client";
import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Contact from"@/components/Contact";
export default function Home(){
  return(
    <div className="flex flex-col min-h-src ">
      <Header/>
      <About/>
      <Experience/>
     <Projects/>
     <Contact/>
      <Footer/>
    </div>
  );
}
