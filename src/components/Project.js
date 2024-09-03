import React, { useEffect, useState } from 'react';
import './Project.css';
import projectImage1 from '../assets/project/ToDoApp.png';
import projectImage2 from '../assets/project/iNoteBook.png';
import projectImage3 from '../assets/project/NewsInfo.png';
import projectImage4 from '../assets/project/WordEditor.png';
import projectImage5 from '../assets/project/RandomQuoteGenerator.png';

function Project() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: 'To Do App',
            tech: 'Angular',
            imageURL: projectImage1,
            description: 'To Do App web application for user to perform CRUD (Create, Read, Update, Delete) operation and mark/unmark task important or completed.',
        },
        {
            title: 'iNoteBook',
            tech: 'Angular',
            imageURL: projectImage2,
            description: 'iNoteBook web application have user authentication feature which allow user to view it\'s specific notes and perform CRUD (Create, Read, Update, Delete) operation.',
        },
        {
            title: 'News Info',
            tech: 'Angular',
            imageURL: projectImage3,
            description: 'NewsInfo web application display latest news from around globe and user can apply filter based on categorization.',
        },
        {
            title: 'Word Editor',
            tech: 'Angular',
            imageURL: projectImage4,
            description: 'Word Editor web application allow user to perform various task on text entered in textbox such as \'Converting letters to uppercase/lowercase, clear text, remove spaces, copy text\'',
        },
        {
            title: 'Chat App',
            tech: 'Angular',
            imageURL: projectImage5,
            description: 'Chat App web application allow user to communicate with other user around globe, user can share images, documents, voice notes. User can also have voice/video call with other user.',
        },
    ];

    // Function to go to the next project
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    // Automatically change the project every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextProject, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="projects">
            <div className='container'>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className={`project-card ${index === currentIndex ? 'active' : ''}`} key={index} >
                            <h3>{project.title}</h3>
                            <img src={project.imageURL} alt="project" />
                            <h4>{project.tech}</h4>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
