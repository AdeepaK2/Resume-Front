import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Project    from "./Project.jsx";

const projects = [
    {
        image: '/project1.jpg',
        title: 'Project One',
        techStack: ['React', 'Node.js', 'MongoDB'],
        date: 'August 2024'
    },
    {
        image: '/project2.jpg',
        title: 'Project Two',
        techStack: ['Angular', 'Firebase'],
        date: 'July 2024'
    },
    {
        image: '/project3.jpg',
        title: 'Project Three',
        techStack: ['Vue.js', 'Laravel'],
        date: 'June 2024'
    },
    {
        image: '/project4.jpg',
        title: 'Project Four',
        techStack: ['Java', 'Spring Boot', 'MySQL'],
        date: 'May 2024'
    }
];

const Portfolio = () => {
    return (
        <Carousel>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    image={project.image}
                    title={project.title}
                    techStack={project.techStack}
                    date={project.date}
                />
            ))}
        </Carousel>
    );
};

export default Portfolio;
