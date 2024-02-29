import React, { useState, useEffect } from "react";
import "./header.css";
import { TbMenu } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { TbPuzzle } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";

function Header({ homeRef, skillRef, aboutRef, educationRef, contactRef }) {
  const [activeItem, setActiveItem] = useState("HOME");

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
        setActiveItem("HOME");
      } else if (
        aboutRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        educationRef.current.offsetTop - window.scrollY >=
          window.innerHeight / 2
      ) {
        setActiveItem("ABOUT");
      } else if (
        educationRef.current.offsetTop - window.scrollY <
          window.innerHeight / 2 &&
        skillRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setActiveItem("EDUCATION");
      } else if (
        skillRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setActiveItem("SKILLS");
      } else if (
        contactRef.current.offsetTop - window.scrollY <
        window.innerHeight / 2
      ) {
        setActiveItem("CONTACT");
      } else setActiveItem("HOME");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        <div data-bs-toggle="modal" data-bs-target="#exampleModalRight">
          <div className="circle">
            <TbMenu className="hamburger-icon" />
          </div>
        </div>
        {/* Menu Modal */}
        <div
          className="modal fade drawer right-align"
          id="exampleModalRight"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row justify-content-center">
                  <div className="col-11">
                    <div className="d-flex justify-content-center">
                      <ul className="my-5 list-unstyled ">
                        <li
                          className="d-flex align-items-center cursor-pointer mt-3"
                          onClick={() => scrollToRef(homeRef)}
                        >
                          <AiOutlineHome
                            className={`me-3 menu-icons ${
                              activeItem === "HOME" ? "active" : ""
                            }`}
                          />{" "}
                          Home
                        </li>
                        <li
                          className="d-flex align-items-center cursor-pointer mt-3"
                          onClick={() => scrollToRef(aboutRef)}
                        >
                          <GoPerson
                            className={`me-3 menu-icons ${
                              activeItem === "ABOUT" ? "active" : ""
                            }`}
                          />{" "}
                          About
                        </li>
                        <li
                          className="d-flex align-items-center cursor-pointer mt-3"
                          onClick={() => scrollToRef(educationRef)}
                        >
                          <MdOutlineCastForEducation
                            className={`me-3 menu-icons ${
                              activeItem === "EDUCATION" ? "active" : ""
                            }`}
                          />{" "}
                          Education and Experience
                        </li>
                        <li
                          className="d-flex align-items-center cursor-pointer mt-3"
                          onClick={() => scrollToRef(skillRef)}
                        >
                          <TbPuzzle
                            className={`me-3 menu-icons ${
                              activeItem === "SKILLS" ? "active" : ""
                            }`}
                          />{" "}
                          Skills
                        </li>

                        <li
                          className="d-flex align-items-center cursor-pointer mt-3"
                          onClick={() => scrollToRef(contactRef)}
                        >
                          <GrContact
                            className={`me-3  ${
                              activeItem === "CONTACT" ? "active" : ""
                            }`}
                          />{" "}
                          Contact
                        </li>
                        <li className="text-white mt-5">Social Media</li>
                        <li className="d-flex align-items-center cursor-pointer mt-3">
                          <BsInstagram className="me-3  menu-icons" />
                          <BsGithub className="me-3 menu-icons" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu modal end */}
      </div>
      <div className="d-flex justify-content-center ">
        <div className="menu-bar  ">
          <div className="d-flex justify-content-center">
            <ul className="my-5 list-unstyled px-3">
              <li className="d-flex align-items-center cursor-pointer ">
                <AiOutlineHome
                  className={` menu-icons ${
                    activeItem === "HOME" ? "active" : ""
                  }`}
                  onClick={() => scrollToRef(homeRef)}
                />
              </li>
              <li className="d-flex align-items-center cursor-pointer mt-4">
                <GoPerson
                  className={` menu-icons ${
                    activeItem === "ABOUT" ? "active" : ""
                  }`}
                  onClick={() => scrollToRef(aboutRef)}
                />
              </li>
              <li className="d-flex align-items-center cursor-pointer mt-4">
                <MdOutlineCastForEducation
                  className={` menu-icons ${
                    activeItem === "EDUCATION" ? "active" : ""
                  }`}
                  onClick={() => scrollToRef(educationRef)}
                />
              </li>
              <li className="d-flex align-items-center cursor-pointer mt-4">
                <TbPuzzle
                  className={` menu-icons ${
                    activeItem === "SKILLS" ? "active" : ""
                  }`}
                  onClick={() => scrollToRef(skillRef)}
                />
              </li>

              <li className="d-flex align-items-center cursor-pointer mt-4">
                <GrContact
                  className={` ${activeItem === "CONTACT" ? "active" : ""}`}
                  onClick={() => scrollToRef(contactRef)}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
