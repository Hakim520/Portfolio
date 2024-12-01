import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import header from '../assets/images/header-img.svg'
import test from '../assets/images/banner1.svg'

import { FileEarmarkArrowDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () =>
{
    

    const [isDeleting, setIsDeleting] = useState(false); // Typing or Deleting
    const [text, setText] = useState('');   // Contains the letters  that should be written
    const [loopNum, setLoopNum]=useState(0); // Index within the  toRotate List
    const toRotate = ["AI Student", "Web Developer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Represents How much Time so that another Letter renders After the first one 
    const period= 4000; // Represents the gap between each Text Rendering

    useEffect(() => { 

        let ticker= setInterval(()=> {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if ( isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                   
                    {({ isVisible }) =>  
                     <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{"Hi, I'm Hakim"} <span className="wrap">{text}</span></h1>
                            <p>Polyglot and Technology Enthusiast, I am a developer with strong expertise in <span className="description"> Web development</span> and <span className="description">Artificial intelligence</span>.</p>
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href="https://linkedin.com/in/hakim-kadem-b42109241" target="_blank"><img src={navIcon1} alt="image" /></a>
                                    <a href="https://github.com/Hakim520" target="_blank"><img src={navIcon2} alt="image" /></a>
                                    
                                </div>
                            
                                    <button className="vvd"><span>Download CV <FileEarmarkArrowDown size={25} className="icon-right"/> </span></button>
                            
                            </span>
                        </div>}
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                    
                    <span className="banner-image"><img src={test} alt="Header" /></span>
                     
                    
                    
                    </Col>
                </Row>
            </Container>

        </section>
    )
}