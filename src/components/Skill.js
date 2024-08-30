import React from 'react';
import './Skill.css';
import Java from '../assets/java.png';
import ReactJs from '../assets/library.png';
import AngularJs from '../assets/angularjs.png';
import NodeJs from '../assets/nodejs.png';
import HtmlImg from '../assets/html-5.png';
import CssImg from '../assets/css-3.png';
import JsImg from '../assets/js.png';
import JspImg from '../assets/jsp-open-file-format-with-java-logo.png';
import GitImg from '../assets/github (1).png';

function Skill() {
    return (
        <section className='skill' id='skill'>
            <div className='container'>
                <div className='skill-container'>
                    <h2>
                        Skills
                    </h2>
                    <div className='skill-name'>
                        <div className='skill-name-type'>
                            <img src={Java} alt="" />
                            <span>Java</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={ReactJs} alt="" />
                            <span>React</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={AngularJs} alt="" />
                            <span>Angular</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={NodeJs} alt="" />
                            <span>NodeJS</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={HtmlImg} alt="" />
                            <span>HTML</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={CssImg} alt="" />
                            <span>CSS</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={JsImg} alt="" />
                            <span>JavaScript</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src="../assets/" alt="" />
                            <span>MySQL</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={JspImg} alt="" />
                            <span>JSP</span>
                        </div>
                        <div className='skill-name-type'>
                            <img src={GitImg} alt="" />
                            <span>Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
