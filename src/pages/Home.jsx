import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import myPhoto from "../assets/images/Amruta Hegd.png";

import emailjs from "@emailjs/browser";
import Header from "../components/Header/Header";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import TimeLine from "../components/TimeLine";
import { GoPerson } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { TbPuzzle } from "react-icons/tb";
import { MdOutlineCastForEducation } from "react-icons/md";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css-icon.webp";
import scssIcon from "../assets/images/scss.png";
import jssIcon from "../assets/images/js.png";
import tsIcon from "../assets/images/Typescript-icon.png";
import reactIcon from "../assets/images/React-icon.svg.png";
import jiraIcon from "../assets/images/jira.png";
import gitIcon from "../assets/images/Git-Icon.png";
import wordpressIcon from "../assets/images/wordpress.png";
import nextjsIcon from "../assets/images/nextjs.png";
import azureIcon from "../assets/images/devops.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    content: "",
  });
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let base_local_url = "http://localhost:5000";
  let base_app_url = "https://react-portfolio-one-inky.vercel.app";

  const handleSubmit = async () => {
    console.log("submitted");
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.mobileNumber,
      company: formData.companyName,
      message: formData.content,
    };

    try {
      const response = await fetch(`${base_app_url}/api/v1/form/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.log("Error");
        toast.error("Unable to contact");
      } else {
        const templateParams = {
          name: formData.name,
          companyName: formData.companyName,
          email: formData.email,
          content: formData.content,
        };

        emailjs
          .send("service_o6a64hj", "template_webuasl", templateParams, {
            publicKey: "5RD08CnXvKCxT45Y8",
          })
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              toast.success("Your message sent successfully.");
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
      }
    } catch (error) {
      console.error("There was an error sending the content:", error.content);
      toast.error("There was an error sending the content");

    }
  };
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("fadeIn");
  //       }
  //     });
  //   });

  //   observer.observe(skillRef.current);

  //   return () => observer.disconnect();
  // }, []);
  return (
    <div className="body-bg ">
      <div>
        <div className="row justify-content-end">
          {/* Menu Bar */}
          <div className="col-lg-2 col-md-2 col-sm-6">
            <Header
              homeRef={homeRef}
              skillRef={skillRef}
              aboutRef={aboutRef}
              contactRef={contactRef}
              educationRef={educationRef}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="row justify-content-center justify-content-lg-start p-0 m-0">
          {/* Profile Card */}
          <div className="col-lg-3 col-md-11 col-sm-10">
            <div className="d-flex ">
              <div className="profile-card px-2 ">
                <div className="d-flex p-3 pt-3 justify-content-between align-items-end">
                  <h1 className="fw-bold text-white">Amruta</h1>
                  <p className="text-white">Software Developer</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-8 my-3">
                    <img
                      src={myPhoto}
                      alt="myPhoto"
                      className="img-fluid border-radius-10"
                    ></img>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-white">amrutahegde01@gmail.com</h5>
                  <h5 className="text-white">7483647173</h5>
                  <h5 className="text-white">
                    Sirsi , Uttara Kannada ,Karnataka
                  </h5>
                </div>
                <div className="mx-2">
                  <button type="button" className="py-3 contact-btn"  onClick={() => scrollToRef(contactRef)}>
                    <MdOutlineMailOutline className="me-3 email-icon" /> Contact
                    Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contents */}
          <div className="col-lg-7 col-md-11 col-sm-11">
            <div className="d-flex justify-content-center">
              <div className="col-lg-9 col-md-11">
                <div className="my-5 min-height mb-5 mb-lg-0" ref={homeRef}>
                  <p className="menu-card f-12 px-4 py-1  text-center d-flex align-items-center  text-white">
                    <AiOutlineHome className={`me-2`} /> INTRODUCE
                  </p>
                  <h1 className="text-white heading mt-5">Hi, </h1>
                  <h1 className="text-white heading">
                    I'm <span className="color-skyblue">Amruta Hegde</span> ,
                    Front End Developer
                  </h1>
                  <p className="pt-3">
                    I collaborate closely with design and backend teams to
                    ensure seamless integration of UI components and maintain
                    high standards of code quality and performance.
                  </p>
                  <div className="d-flex ">
                    <div className="col-10">
                      <div className="d-flex justify-content-between">
                        <div className="fade-up">
                          <div className="color-skyblue f-72">2+</div>
                          <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="fade-up">
                          <div className="color-skyblue f-72">7+</div>
                          <p>PROJECTS COMPLETED</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="min-height fade-up my-5  mb-lg-0"
                  ref={aboutRef}
                >
                  <p className="menu-card f-12 px-4 py-1  text-center d-flex align-items-center  text-white">
                    <GoPerson className={`me-2`} /> ABOUT
                  </p>
                  <h1 className="text-white heading">Professional Summary</h1>

                  <p className="pt-3">
                    At NSPlus Technology, my role as a front-end developer
                    enabled me to harness my expertise in{" "}
                    <span className="text-white px-2">
                      HTML, CSS, JavaScript, and React.js
                    </span>{" "}
                    to craft captivating websites. Leveraging React context API
                    and Redux, I ensured the seamless integration of dynamic
                    features, contributing to the creation of robust and
                    scalable web applications. Additionally, my familiarity with
                    <span className="text-white px-2">Next.js</span>
                    elevated the quality of our projects, enabling me to meet
                    the diverse needs of our clients.
                  </p>
                  <p className="pt-3">
                    Driven by a passion for continuous improvement, I actively
                    engage in collaborative efforts, participating in code
                    reviews and collaborating with remote teams. Recognized as a
                    <br></br>
                    <span className="text-white px-2">"Rising Star"</span> at
                    NSP, I am dedicated to pushing the boundaries of web
                    development, striving for excellence in every project.
                    Beyond work, I find joy in exploring the vast expanse of the
                    internet, nurturing my artistic side through drawing, and
                    engaging in social activities that enrich both my personal
                    and professional growth.
                  </p>
                </div>

                <div className="min-height-100 fade-up mb-5" ref={educationRef}>
                  <p className="menu-card f-12 px-4 py-1  text-center d-flex align-items-center  text-white">
                    <MdOutlineCastForEducation className={`me-2`} /> Education
                  </p>
                  <h1 className="text-white heading">
                    Experience &{" "}
                    <span className="color-skyblue">Education</span>
                  </h1>

                  <TimeLine />
                </div>

                <div className="min-height fade-up my-5" ref={skillRef}>
                  <p className="menu-card f-12 px-4 py-1  text-center d-flex align-items-center  text-white">
                    <TbPuzzle className={`me-2`} /> Skills
                  </p>
                  <h1 className="text-white heading my-3">
                    My <span className="color-skyblue">Advantages</span>
                  </h1>
                  <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={htmlIcon}
                          alt="html"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={cssIcon}
                          alt="css"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={scssIcon}
                          alt="scss"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={jssIcon}
                          alt="js"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={tsIcon}
                          alt="ts"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={reactIcon}
                          alt="react"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={wordpressIcon}
                          alt="wordpressIcon"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={jiraIcon}
                          alt="jira"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={gitIcon}
                          alt="git"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4 text-center">
                        <img
                          src={azureIcon}
                          alt="wordpressIcon"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                      <div className="skill-inner my-4  text-center">
                        <img
                          src={nextjsIcon}
                          alt="jira"
                          className="img-fluid mt-3 p-4"
                        />
                        <h4 className="text-center color-skyblue pb-4">100%</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="min-height margin-top fade-up" ref={contactRef}>
                  <div className=" my-5 ">
                    <div className="row box-shadow">
                      <p className="menu-card f-12 px-4 py-1  text-center d-flex align-items-center  text-white">
                        <GrContact className={`me-2`} /> Contact
                      </p>
                      <h1 className="text-white heading my-3">
                        Let's <span className="color-skyblue">Connect</span>
                      </h1>
                      <div className="col-lg-12">
                        <div className="py-4 px-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control transparent-input my-4"
                              placeholder="Name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control transparent-input my-4"
                              placeholder="Email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control transparent-input my-4"
                              placeholder="Mobile Number"
                              name="mobileNumber"
                              value={formData.mobileNumber}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control transparent-input my-4"
                              placeholder="Company Name"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                            />
                            <textarea
                              rows="4"
                              className="form-control transparent-input my-4"
                              placeholder="content"
                              name="content"
                              value={formData.content}
                              onChange={handleChange}
                            ></textarea>
                            <button
                              className="px-5 py-2 my-3 transperant-send-btn"
                              onClick={handleSubmit}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
