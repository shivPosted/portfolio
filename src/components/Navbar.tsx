import { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  function handleClick(e) {
    const target = e.target.closest(".nav-item");
    if (!target) return;
    setActiveSection(target.dataset.linkName);
  }

  return (
    <nav
      className="flex gap-1  bg-white/10 backdrop-blur border rounded-full border-white/15 p-0.5"
      onClick={handleClick}
    >
      <a
        href="#"
        data-link-name="home"
        className={[
          "nav-item",
          `${activeSection === "home" ? "nav-active" : ""}`,
        ].join(" ")}
      >
        Home
      </a>
      <a
        href="#project-section"
        data-link-name="project"
        className={[
          "nav-item",
          `${activeSection === "project" ? "nav-active" : ""}`,
        ].join(" ")}
      >
        Projects
      </a>
      <a
        href="#about-section"
        data-link-name="about"
        className={[
          "nav-item",
          `${activeSection === "about" ? "nav-active" : ""}`,
        ].join(" ")}
      >
        About
      </a>
      <a
        href="#contact-section"
        data-link-name="contact"
        className={[
          "nav-item",
          `${activeSection === "contact" ? "nav-active" : ""}`,
        ].join(" ")}
      >
        Contact
      </a>
    </nav>
  );
}
export default Navbar;
