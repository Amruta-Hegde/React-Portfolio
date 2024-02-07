import React, { useRef, useState } from "react";
import "./Home.css";
import myPhoto from "../assets/images/myphoto.jpg";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css-icon.webp";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/React-icon.svg.png";
import TsIcon from "../assets/images/Typescript-icon.png";
import phpIcon from "../assets/images/php.png";
import wordPressIcon from "../assets/images/wordpress.png";
import gitIcon from "../assets/images/Git-Icon.png";
import jiraICon from "../assets/images/jira.png";
import emailIcon from "../assets/images/email.webp";
import phoneIcon from "../assets/images/phone.png";
import locationIcon from "../assets/images/location-sign.svg";
import Header from "../components/Header/Header";
import resumeDocument from "../resume/Amruta-Hegde-Reume.pdf";
import emailjs from "@emailjs/browser";

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      const response = await fetch("http://localhost:5000/api/v1/form/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.log("Error");
      } else {
        console.log("content sent successfully!");
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
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
      }
    } catch (error) {
      console.error("There was an error sending the content:", error.content);
    }
  };

  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 80 },
    { name: "Next.js", percentage: 50 },
    { name: "PHP", percentage: 50 },
    { name: "WordPress", percentage: 80 },
  ];

  return (
    <div className="body-bg">
      <Header
        homeRef={homeRef}
        skillRef={skillRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      {/* Poster */}
      <div className="container">
        <div className="text-bounce" ref={homeRef}>
          <div className="row align-items-center">
            <div className="col-md-7 col-sm-11 text-center">
              <div className="d-flex align-items-center poster">
                <div>
                  <div className="heading-text">Hello !</div>
                  <div className="animate-text">
                    <div>I'm a Web Developer</div>
                  </div>
                  <div className="heading-text">Code. Create. Inspire</div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-11">
              <div className="d-flex align-items-center poster my-5 ">
                <img
                  src={myPhoto}
                  alt="myphoto"
                  className="img-fluid img-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Me */}

      <div class="experience-bg p-4">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-2 col-md-5 col-sm-12 mb-4 mb-md-0">
              <div class="d-flex align-items-center py-3">
                <h1 class="text-white font-size-58">2</h1>
                <h5 class="text-white px-3">YEARS OF EXPERIENCE</h5>
              </div>
            </div>
            <div class="col-lg-2 col-md-5 col-sm-12 mb-4 mb-md-0">
              <div class="d-flex align-items-center py-3">
                <h1 class="text-white font-size-58">7</h1>
                <h5 class="text-white px-3">PROJECTS COMPLETED</h5>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="d-flex flex-wrap flex-xl-nowrap">
                <img
                  src={htmlIcon}
                  alt="html-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={cssIcon}
                  alt="css-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />

                <img
                  src={jsIcon}
                  alt="js-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={TsIcon}
                  alt="scss-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={reactIcon}
                  alt="react-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={phpIcon}
                  alt="php-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={wordPressIcon}
                  alt="wordpress-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={gitIcon}
                  alt="git-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
                <img
                  src={jiraICon}
                  alt="jira-icon"
                  className="img-fluid mx-2 mx-lg-3 my-3"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bg" ref={aboutRef}>
        <div className="container">
          <div className="row  py-5 ">
            <div className="col-xl-4 col-md-12 text-center text-lg-start">
              <div className="d-flex justify-content-center justify-content-xl-start">
                <h2 className="text-with-shadow pt-5">Who I Am</h2>
              </div>
            </div>

            <div className="col-xl-8 col-md-12 text-center text-lg-start">
              <div className="d-flex justify-content-start pt-5">
                <div>
                  <p>
                    With a strong foundation in Computer Science, I graduated
                    with distinction from Karnatak University Dharwad, earning a
                    Bachelor of Computer Application degree with an impressive
                    87% score. Throughout my academic journey, I sharpened my
                    problem-solving skills and gained a comprehensive
                    understanding of front-end development technologies.{" "}
                  </p>
                  <p>
                    At NSPlus Technology, my role as a front-end developer
                    enabled me to harness my expertise in HTML, CSS, JavaScript,
                    and React.js to craft captivating websites. Leveraging React
                    context API and Redux, I ensured the seamless integration of
                    dynamic features, contributing to the creation of robust and
                    scalable web applications. Additionally, my familiarity with
                    Next.js elevated the quality of our projects, enabling me to
                    meet the diverse needs of our clients.{" "}
                  </p>
                  <p>
                    Driven by a passion for continuous improvement, I actively
                    engage in collaborative efforts, participating in code
                    reviews and collaborating with remote teams. Recognized as a
                    "Rising Star" at NSP, I am dedicated to pushing the
                    boundaries of web development, striving for excellence in
                    every project. Beyond work, I find joy in exploring the vast
                    expanse of the internet, nurturing my artistic side through
                    drawing, and engaging in social activities that enrich both
                    my personal and professional growth.
                  </p>
                  <button className="px-4 py-3 my-5 dwnld-btn">
                    <a
                      className="text-light text-decoration-none"
                      href={resumeDocument}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download PDF
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="container">
          <div className="row  py-5" ref={skillRef}>
            <div className="col-md-12">
              <div className="d-flex justify-content-center">
                <h2 className="text-with-shadow pt-5">Skills</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-md-9 col-sm-10">
                <div className=" text-center">
                  <p className="pt-3">
                    With a mastery of HTML, CSS, JavaScript, and React.js, I
                    excel in crafting captivating and user-friendly web
                    experiences. Additionally, my proficiency extends to
                    Next.js, Git, JIRA, Jenkins, and Azure DevOps, enabling
                    seamless project execution and collaboration. Skilled in
                    responsive design and cross-browser compatibility, I ensure
                    optimal functionality across various devices and platforms.
                    My ability to conduct thorough code reviews and collaborate
                    effectively with remote teams underscores my commitment to
                    delivering high-quality solutions.
                  </p>
                </div>
                <div className="py-5">
                  <div className="row justify-content-between">
                    <div className="col-md-3">
                      <h4>My Focus</h4>
                      <hr />
                      <p>Web Development</p>
                      <p>Responsive Development</p>
                      <p>User Experience (UX)</p>
                      <p>WordPress App Development</p>
                    </div>

                    <div className="col-md-8 ">
                      {skills.map((skill) => (
                        <div className="progress my-4">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="about-bg" ref={contactRef}>
        <div className="container">
          <div className="row justify-content-center py-5 ">
            <div className="col-xl-9 col-md-10 col-sm-10 text-center">
              <div className="row box-shadow">
                <div className="col-lg-6 ol-md-5 dark-purple-bg">
                  <div className="py-4 px-3">
                    <h4 className="text-white py-3">Send content</h4>
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
                        className="px-5 py-2 my-3 send-btn"
                        onClick={handleSubmit}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 bg-white">
                  <div className="p-3 p-xl-5">
                    <h4 className="">Contact Me</h4>
                    <p className="pt-3">
                    Let's Connect: Reach Out and Let's Start a Conversation
                    </p>
                    <div className="d-flex align-items-center my-4">
                      <div class="circle-icon-container">
                        <img
                          src={emailIcon}
                          alt="emailIcon"
                          class="circle-icon p-2"
                        />
                      </div>
                      <div className="ps-4 ">
                        <span className="fw-bold">Email:</span>{" "}
                        amrutahegde01@gmail.com
                      </div>
                    </div>
                    <div className="d-flex align-items-center my-4">
                      <div class="circle-icon-container">
                        <img
                          src={phoneIcon}
                          alt="emailIcon"
                          class="circle-icon p-2"
                        />
                      </div>
                      <div className="ps-4">
                        <span className="fw-bold pr-5">Phone:</span> 7483647173
                      </div>
                    </div>
                    <div className="d-flex my-4 align-items-center">
                      <div class="circle-icon-container">
                        <img
                          src={locationIcon}
                          alt="emailIcon"
                          class="circle-icon p-2"
                        />
                      </div>
                      <div className="ps-4">
                        <span className="fw-bold pe-2">Address:</span>
                        Siddapur, Karnataka , India
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
