
import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 0,
        title: "The Best Men",
        languages: "handlebars, js, css,",
        packages: "bcrypt, Express.js, nodemon, uuid, axios, mysql2, sequelize,",
        image: "/img/Best-Men.jpg",
        description: "An app that wil not only help you find your next favorite cocktail, but also give instructions and ingredients to make it",
        repo: "https://github.com/Project2-TheBestMen/project2",
        live: "https://project2thebestmen.herokuapp.com/",
    },
    {
        id: 1,
        title: "Social-Network-API",
        languages: "Javascript",
        packages: "MongoDB, Mongoose, Express.js,",
        image: "/img/Social-Network-API.png",
        description: "It's an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
        repo: "https://github.com/TimmySigs/Social-Network-API",
        live: "https://drive.google.com/file/d/1RO8C9VGH4T5kVk-XhIe7q6WFEA_gNz8f/view",
    },
    {
        id: 2,
        title: "Express Note Taking App",
        languages: "html, css, js,",
        packages: "Node.js, Express, Uniqid",
        image: "/img/Note-Taker.jpg",
        description: "A quick simple app that lets you write and save notes",
        live: "https://pure-hollows-51401.herokuapp.com/",
        repo: "https://github.com/TimmySigs/Note-Taker",
    },
    {
        id: 3,
        title: "Compass Ranger",
        languages: "html, css, js",
        image: "/img/compass.png",
        packages: "none",
        description: "A interactive map that will show you the nearest National Parks and the weather for them.",
        repo: "https://github.com/Project-1-Team-2/Compass-Ranger",
        live: "https://project-1-team-2.github.io/Compass-Ranger/index.html",
    }
];

function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;