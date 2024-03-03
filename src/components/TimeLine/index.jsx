import React, { useEffect } from "react";
import "./timeline.css";

const Timeline = () => {
  const education = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      year: "2018 - 2021",
      university: "Karnataka University of Dharwad",
      score: "87%",
    },
    {
      title: "Pre-University Course (PUC)",
      year: "2016 - 2018",
      university: "Karnataka State Secondary Education Examination Board",
      score: "84%",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer at NSP",
      year: "March 2023 - Present",
      description:
        "Developed more than 7 webapplications using React context API as well as Redux.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
        }
      });
    });

    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline my-5">
        <div className="line"></div>
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot mt-2"></div>
            <div className="timeline-content mx-3 mb-5">
              <h3 className="">{exp.title}</h3>
              <p  className=" color-skyblue ">{exp.year}</p>
              <p className="">{exp.description}</p>
            </div>
          </div>
        ))}
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot mt-2"></div>
            <div className={`timeline-content mx-3 ${index === education.length - 1 ? '' : 'mb-5'}`}>
              <h3 className="">{edu.title}</h3>
              <div className="d-flex flex-wrap">
                <div className="me-3">{edu.university}</div> <div className=" color-skyblue">{edu.year}</div>
              </div>
              <p>{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
