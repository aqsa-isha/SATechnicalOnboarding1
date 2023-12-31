/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TO DO LIST WEB APP 🎉",
    description:
      "A simple To Do List Web App where you can organize and prioritize your tasks. You can add and remove tasks from your list.",
    url: "https://github.com/aqsa-isha/TO-DO-LIST-WEB-APP",
  },
  {
    title: "Dice Roller App",
    description:
      "The Dice Roller App is a versatile and user-friendly tool that allows you to roll virtual dice with ease and precision.",
    url: "https://github.com/aqsa-isha/Dice-Roller-App",
  },
  {
    title: "Simple Calculator",
    description:
      "It's a basic calculator which performs basic operations like addition, subtraction, multiplication and division.",
    url: "https://github.com/aqsa-isha/Simple-Calculator",
  },
  {
    title: "Registration App",
    description:
      "The User Registration App is a web-based application designed to collect and store user information for a specific purpose, such as signing up for a website, newsletter, or service. It provides a user-friendly interface that allows individuals to enter their details securely. This app employs HTML for structure, CSS for styling, and JavaScript for interactivity, creating a seamless and responsive user experience.",
    url: "https://github.com/aqsa-isha/Registration-Form",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
