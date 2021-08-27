import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function navbar() {
  return (
    <header className="bg-rich-black border-b-2 border-green-400">
      <div className="container px-8 mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-0 px-3 my-4 text-gray-200 hover:text-green-200"
            activeClassName="text-green-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/experience"
            className="inline-flex items-center py-0 px-3 my-4 text-gray-200 hover:text-green-200"
            activeClassName="text-green-400"
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-0 px-3 my-4 text-gray-200 hover:text-green-200"
            activeClassName="text-green-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/writing"
            className="inline-flex items-center py-0 px-3 my-4 text-gray-200 hover:text-green-200"
            activeClassName="text-green-400"
          >
            Writing
          </NavLink>
        </nav>
        <div className="inline-flex py-0 px-3 my-4">
          <SocialIcon
            url="https://www.linkedin.com/in/sabrinaawilson"
            className="mr-4"
            target="_blank"
            fgColor="fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/sabeone/"
            className="mr-4"
            target="_blank"
            fgColor="fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default navbar;
