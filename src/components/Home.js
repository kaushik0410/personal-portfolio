import React, { useEffect, useState, Suspense } from 'react';
import HeaderImage from '../assets/header-img.svg';
// import {Model} from './Scene';
import {Model} from './Scene';
import './Home.css';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Home() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'Java Developer', 'Full Stack Developer', 'Rest API'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateText === fulltext) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(1000);
        }
    };

    return (
        <section className='home' id='home'> 
            <div className='container'>
                <div className='user-information'>
                    <span>Welcome to my Portfolio</span>
                    <h1>Hello I'm <em>Kaushik Bharshing</em></h1>
                    <span>{text}</span>
                    {/* <p>I am Software Engineer with hands on experience in Java, JSP, servlets, Frontend & Backend Developer, Rest API. Additionally, i have built projects using ReactJS, AngularJS. <br /> i am seeking a position as a Software Engineer where i can showcase my technical and problem-solving skills in software development, further refine my skills and expand my knowledge.</p> */}
                </div>
                <div className='user-image'>
                    <img src={HeaderImage} alt='' />
                    {/* <Canvas className="canvas-fixed-size">
                        <ambientLight />
                        <directionalLight />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                    </Canvas> */}
                </div>
            </div>
        </section>
    );
};

export default Home;