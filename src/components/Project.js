import React from 'react';
import projectImage1 from '../assets/project/ToDoApp.png';
import projectImage2 from '../assets/project/iNoteBook.png';
import projectImage3 from '../assets/project/NewsInfo.png';
import projectImage4 from '../assets/project/WordEditor.png';
import projectImage5 from '../assets/project/RandomQuoteGenerator.png';
import './Project.css';

function Project() {

    return (
        <section className='project' id='project'>
            <div className='container'>
                <div className='project-container'>
                    <h2>Projects</h2>
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={projectImage1} alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>To Do App</h5>
                                    <h5><strong>Tech stack:</strong> <em>Angular</em></h5>
                                    <p>To Do App web application for user to perform CRUD (Create, Read, Update, Delete) operation and mark/unmark task important or completed.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={projectImage2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>iNoteBook</h5>
                                    <h5><strong>Tech stack:</strong> <em>MangoDB, Express, React, NodeJS</em></h5>
                                    <p>iNoteBook web application have user authentication feature which allow user to view it's specific notes and perform CRUD (Create, Read, Update, Delete) operation.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={projectImage3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>News Info</h5>
                                    <h5><strong>Tech stack:</strong> <em>React</em></h5>
                                    <p>NewsInfo web application display latest news from around globe and user can apply filter based on categorization.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={projectImage4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Word Editor</h5>
                                    <h5><strong>Tech stack:</strong> <em>React</em></h5>
                                    <p>Word Editor web application allow user to perform various task on text entered in textbox such as 'Converting letters to uppercase/lowercase, clear text, remove spaces, copy text'</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={projectImage5} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Chat App</h5>
                                    <h5><strong>Tech stack:</strong> <em>MangoDB, Express, React, NodeJS</em></h5>
                                    <p>Chat App web application allow user to communicate with other user around globe, user can share images, documents, voice notes. User can also have voice/video call with other user.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
