import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <section className='experience' id='experience'>
            <div className='container'>
                <h2 className='experience-title'>Experience</h2>
                <div className='experience-cards'>
                    <div className='experience-card'>
                        <div className='experience-content'>
                            <h3>Software Engineer</h3>
                            <h4>In-Solutions Global Ltd.</h4>
                            <p>June 2022 - April 2024</p>
                            <p>
                                Worked on WinSCP server, NetBeans IDE, Eclipse IDE for development. Developed modules to process files manually or automatically, complaint settlement, maker-checker module to check which record has been updated and what changes have been made, automatic email scheduler.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
