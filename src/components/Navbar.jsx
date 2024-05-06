import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import {
  faHouse,
  faUser,
  faCode,
  faDownload,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 h-1/3 z-50">
      <header className="ml-2">
        <RenderNavLinks />
      </header>
    </div>
  );
};

function RenderNavLinks() {
  const navLinks = {
    "/#home": {
      icon: faHouse,
      name: "Home",
    },
    "/#about": {
      icon: faUser,
      name: "About",
    },
    "/#projects": {
      icon: faCode,
      name: "Projects",
    },
    "/#experience": {
      icon: faBriefcase,
      name: "Experience",
    },
    "/#resume": {
      icon: faDownload,
      name: "Resume",
    },
  };

  return (
    <div className="flex flex-col items-start bg-transparent text-white text-lg">
      {/* {Object.entries(navLinks).map(([link, { icon, name }]) => (
        <Link key={link} smooth to={link}>
          <NavLinkEntry
            icon={icon}
            name={name}
            className={"text-white rounded-full text-xl p-2 hover:ml-1"}
          />
        </Link>
      ))} */}
    </div>
  );
}

function NavLinkEntry({ icon, name, className }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);
  return (
    <div
      className={`flex justify-center rounded-full items-center p-3 gap-1 ${
        isExpanded ? "hover:bg-transparent" : ""
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon icon={icon} className={className} />
      <span className={isExpanded ? "visible" : "hidden"}>{name}</span>
    </div>
  );
}

export default Navbar;
