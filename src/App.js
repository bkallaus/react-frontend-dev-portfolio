import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const App = () => {
  const [sharedData, setSharedBasicInfo] = useState({});
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    void loadSharedData();
    void loadResumeFromPath();
  }, []);

  const loadResumeFromPath = (path) => {
    fetch(`res_primaryLanguage.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (data) => {
      const json = await data.json();
      setResumeData(json);
    });
  }

  const loadSharedData = () => {
    fetch(`portfolio_shared_data.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (data) => {
      const json = await data.json();
      setSharedBasicInfo(json);
    });
  }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      {/* <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      /> */}
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}


export default App;
